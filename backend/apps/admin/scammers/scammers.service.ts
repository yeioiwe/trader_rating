import { BadRequestException, Injectable } from '@nestjs/common';
import { ScammerEntity, ScummerVisible } from 'apps/libs/db/entity/scammer.entity';
import { EntityManager } from 'typeorm';
import { ScammerCreateDto, ScammerEditAboutDto, ScammerUpdatePositionListDto } from './scammers.dto';

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

        const scammer = await this.em.create(ScammerEntity, {
            ...dto,
            positionTop: sortId,
            visible: ScummerVisible.VISIBLE,
            createdAt: new Date(),
            about: '',
            profileLikes: 0,
            profileViews: 0,
        });

        const newScammer = await this.em.save(ScammerEntity, scammer);

        return newScammer.id;
    }

    async getList() {
        const scammersList = await this.em.find(ScammerEntity, { order: { positionTop: 'ASC' } });

        const scammersDemo = scammersList.map(({ id, name, positionTop, tgUsername, category, visible }) => ({
            id,
            name,
            positionTop,
            tgUsername,
            category,
            visible,
        }));

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

        scammersList.forEach(async scammer => {
            const newItem = dto.items.find(item => item.id === scammer.id);

            if (newItem && newItem.positionTop !== scammer.positionTop) {
                await this.em.update(ScammerEntity, { id: scammer.id }, { positionTop: newItem.positionTop });
            }
        });

        return;
    }
}
