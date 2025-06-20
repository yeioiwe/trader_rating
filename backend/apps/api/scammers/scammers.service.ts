import { BadRequestException, Injectable } from '@nestjs/common';
import { ScammerCommentEntity } from 'apps/libs/db/entity/scammer.comment.entity';
import { ScammerEntity, ScummerVisible } from 'apps/libs/db/entity/scammer.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class ScammersService {
    constructor(private em: EntityManager) {}

    async getTopFive() {
        const projects = await this.em.find(ScammerEntity, {
            order: { positionTop: 'ASC' },
            where: { visible: ScummerVisible.VISIBLE },
        });

        const topFive = projects.slice(0, 5);

        const sortedTopFive = topFive.map(({ id, url, name, avatar_url, positionTop, starRate, rate, reports, reviews, shortDescription, tgUsername, category, visible }) => ({
            id,
            url,
            name,
            avatar_url,
            positionTop,
            starRate,
            rate,
            reports,
            reviews,
            shortDescription,
            tgUsername,
            category,
            visible,
        }));

        
        return { items: sortedTopFive };
    }

    async getList() {
        const projects = await this.em.find(ScammerEntity, {
            order: { positionTop: 'ASC' },
            where: { visible: ScummerVisible.VISIBLE },
        });

        const sortedProjects = projects.map(({ id, url, name, avatar_url, positionTop, starRate, rate, reports, reviews, shortDescription, tgUsername, category, visible }) => ({
            id,
            url,
            name,
            avatar_url,
            positionTop,
            starRate,
            rate,
            reports,
            reviews,
            shortDescription,
            tgUsername,
            category,
            visible,
        }));

        return { items: sortedProjects };
    }

    async getOne(profileId: string) {
        const scammerProfile = await this.em.findOneBy(ScammerEntity, {
            url: profileId,
            visible: ScummerVisible.VISIBLE,
        });

        if (!scammerProfile) throw new BadRequestException();

        return scammerProfile;
    }

    async getCommentList(projectId: number) {
        const comments = await this.em.find(ScammerCommentEntity, { where: { projectId }, order: { date: 'DESC' } });

        return { items: comments };
    }
}
