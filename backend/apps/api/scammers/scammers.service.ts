import { BadRequestException, Injectable } from '@nestjs/common';
import { ScammerCommentEntity } from 'apps/libs/db/entity/scammer.comment.entity';
import { ScammerEntity, ScummerVisible } from 'apps/libs/db/entity/scammer.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class ScammersService {
    constructor(private em: EntityManager) {}

    async getList() {
        const projects = await this.em.find(ScammerEntity, {
            order: { positionTop: 'ASC' },
            where: { visible: ScummerVisible.VISIBLE },
        });

        return { items: projects };
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
