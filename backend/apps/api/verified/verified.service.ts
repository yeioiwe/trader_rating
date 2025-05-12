import { BadRequestException, Injectable } from '@nestjs/common';
import { VerifiedCommentEntity } from 'apps/libs/db/entity/verified.comment.entity';
import { VerifiedEntity, VerifiedVisible } from 'apps/libs/db/entity/verified.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class VerifiedService {
    constructor(private em: EntityManager) {}

    async getList() {
        const projects = await this.em.find(VerifiedEntity, {
            order: { positionTop: 'ASC' },
            where: { visible: VerifiedVisible.VISIBLE },
        });

        return { items: projects };
    }

    async getOne(profileId: string) {
        const verifiedProfile = await this.em.findOneBy(VerifiedEntity, {
            url: profileId,
            visible: VerifiedVisible.VISIBLE,
        });

        if (!verifiedProfile) throw new BadRequestException();

        return verifiedProfile;
    }

    async getCommentList(projectId: number) {
        const comments = await this.em.find(VerifiedCommentEntity, {
            where: { projectId },
            order: { date: 'DESC' },
        });

        return { items: comments };
    }
}
