import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import {
    VerifiedCreateComment,
    VerifiedCreateDto,
    VerifiedEditAboutDto,
    VerifiedUpdatePositionListDto,
} from './verified.dto';
import { VerifiedEntity, VerifiedVisible } from 'apps/libs/db/entity/verified.entity';
import { VerifiedCommentEntity } from 'apps/libs/db/entity/verified.comment.entity';

@Injectable()
export class VerifiedService {
    constructor(private em: EntityManager) {}

    async verifiedCreate(dto: VerifiedCreateDto) {
        const existingUrl = await this.em.findOne(VerifiedEntity, { where: { url: dto.url } });
        if (existingUrl) throw new BadRequestException();

        const existingUsername = await this.em.findOne(VerifiedEntity, { where: { tgUsername: dto.tgUsername } });
        if (existingUsername) throw new BadRequestException();

        const verifiedList = await this.em.find(VerifiedEntity);
        let sortId = 1;

        if (verifiedList.length > 0) {
            sortId = verifiedList.reduce((max, verified) => {
                return verified.positionTop > max ? verified.positionTop : max;
            }, -Infinity);

            sortId++;
        }

        const verified = this.em.create(VerifiedEntity, {
            ...dto,
            positionTop: sortId,
            visible: VerifiedVisible.VISIBLE,
            createdAt: new Date(),
            about: '',
            params: '{"one": "", "two": "", "three": ""}',
            profileLikes: 0,
            profileViews: 0,
            notification: false,
        });

        const newVerified = await this.em.save(VerifiedEntity, verified);

        return newVerified.id;
    }

    async getList() {
        const verifiedList = await this.em.find(VerifiedEntity, { order: { positionTop: 'ASC' } });

        const verifiedDemo = verifiedList.map(
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

        return { items: verifiedDemo };
    }

    async getOne(id: number) {
        const project = await this.em.findOneBy(VerifiedEntity, { id });

        if (!project) throw new BadRequestException();

        return project;
    }

    async getAbout(id: number) {
        const project = await this.em.findOneBy(VerifiedEntity, { id });

        if (!project) throw new BadRequestException();

        return {
            visible: project.visible,
            profileLikes: project.profileLikes,
            profileViews: project.profileViews,
            about: project.about,
            params: project.params,
        };
    }

    async editAbout(id: number, body: VerifiedEditAboutDto) {
        const project = await this.em.findOneBy(VerifiedEntity, { id });

        if (!project) throw new BadRequestException();

        await this.em.update(VerifiedEntity, { id }, { ...body });
    }

    async editProfile(id: number, body: VerifiedCreateDto) {
        const project = await this.em.findOneBy(VerifiedEntity, { id });

        if (!project) throw new BadRequestException();

        await this.em.update(VerifiedEntity, { id }, { ...body });
    }

    async updatePosition(dto: VerifiedUpdatePositionListDto) {
        const verifiedList = await this.em.find(VerifiedEntity);

        verifiedList.forEach(async verified => {
            const newItem = dto.items.find(item => item.id === verified.id);

            if (newItem && newItem.positionTop !== verified.positionTop) {
                await this.em.update(VerifiedEntity, { id: verified.id }, { positionTop: newItem.positionTop });
            }
        });

        return;
    }

    async createComment(projectId: number, dto: VerifiedCreateComment) {
        const comment = this.em.create(VerifiedCommentEntity, { ...dto, projectId });

        await this.em.save(VerifiedCommentEntity, comment);
    }

    async deleteComment(id: number) {
        await this.em.delete(VerifiedCommentEntity, { id });
    }

    async getCommentList(projectId: number) {
        const comments = await this.em.find(VerifiedCommentEntity, { where: { projectId }, order: { date: 'DESC' } });

        return { items: comments };
    }
}
