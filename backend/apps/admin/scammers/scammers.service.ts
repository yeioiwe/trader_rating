import { BadRequestException, Injectable } from '@nestjs/common';
import { ScammerCommentEntity } from 'apps/libs/db/entity/scammer.comment.entity';
import { ScammerEntity, ScummerVisible } from 'apps/libs/db/entity/scammer.entity';
import { EntityManager } from 'typeorm';
import {
    CreateSeoDto,
    ScammerCreateComment,
    ScammerCreateDto,
    ScammerEditAboutDto,
    ScammerUpdatePositionListDto,
} from './scammers.dto';
import { SeoItem } from './scammers.types';

@Injectable()
export class ScammersService {
    constructor(private em: EntityManager) {}

    async scammerCreate(dto: ScammerCreateDto) {
        const existingUrl = await this.em.findOne(ScammerEntity, { where: { url: dto.url } });
        if (existingUrl) throw new BadRequestException();

        const existingUsername = await this.em.findOne(ScammerEntity, { where: { tgUsername: dto.tgUsername } });
        if (existingUsername) throw new BadRequestException();

        const scammersList = await this.em.find(ScammerEntity);
        let sortId = 1;

        if (scammersList.length > 0) {
            sortId = scammersList.reduce((max, scammer) => {
                return scammer.positionTop > max ? scammer.positionTop : max;
            }, -Infinity);

            sortId++;
        }

        const scammer = this.em.create(ScammerEntity, {
            ...dto,
            positionTop: sortId,
            visible: ScummerVisible.VISIBLE,
            createdAt: new Date(),
            about: '',
            params: '{"one": "", "two": "", "three": ""}',
            profileLikes: 0,
            profileViews: 0,
            notification: false,
        });

        const newScammer = await this.em.save(ScammerEntity, scammer);

        return newScammer.id;
    }

    async getList() {
        const scammersList = await this.em.find(ScammerEntity, { order: { positionTop: 'ASC' } });

        const scammersDemo = scammersList.map(
            ({ id, name, positionTop, tgUsername, category, visible, notification }) => ({
                id,
                name,
                positionTop,
                tgUsername,
                category,
                visible,
                notification,
            }),
        );

        return { items: scammersDemo };
    }

    async getOne(id: number) {
        const project = await this.em.findOneBy(ScammerEntity, { id });

        if (!project) throw new BadRequestException();

        return project;
    }

    async getAbout(id: number) {
        const project = await this.em.findOneBy(ScammerEntity, { id });

        if (!project) throw new BadRequestException();

        return {
            visible: project.visible,
            profileLikes: project.profileLikes,
            profileViews: project.profileViews,
            about: project.about,
            params: project.params,
        };
    }

    async editAbout(id: number, body: ScammerEditAboutDto) {
        const project = await this.em.findOneBy(ScammerEntity, { id });

        if (!project) throw new BadRequestException();

        await this.em.update(ScammerEntity, { id }, { ...body });
    }

    async editProfile(id: number, body: ScammerCreateDto) {
        const project = await this.em.findOneBy(ScammerEntity, { id });

        if (!project) throw new BadRequestException();

        await this.em.update(ScammerEntity, { id }, { ...body });
    }

    async updatePosition(dto: ScammerUpdatePositionListDto) {
        const scammersList = await this.em.find(ScammerEntity);

        for (const scammer of scammersList) {
            const newItem = dto.items.find(item => item.id === scammer.id);

            if (newItem && newItem.positionTop !== scammer.positionTop) {
                await this.em.update(ScammerEntity, { id: scammer.id }, { positionTop: newItem.positionTop });
            }
        }

        return;
    }

    async createComment(projectId: number, dto: ScammerCreateComment) {
        const comment = this.em.create(ScammerCommentEntity, { ...dto, projectId });

        await this.em.save(ScammerCommentEntity, comment);
    }

    async deleteComment(id: number) {
        await this.em.delete(ScammerCommentEntity, { id });
    }

    async getCommentList(projectId: number) {
        const comments = await this.em.find(ScammerCommentEntity, { where: { projectId }, order: { date: 'DESC' } });

        return { items: comments };
    }

    async seoCreate(id: number, dto: CreateSeoDto) {
        await this.em.update(ScammerEntity, { id }, { title: dto.title, description: dto.description });
    }

    async getSeo(id: number): Promise<SeoItem> {
        const profile = await this.em.findOneBy(ScammerEntity, { id });

        if (!profile) throw new BadRequestException();

        return { title: profile.title, description: profile.description };
    }
}
