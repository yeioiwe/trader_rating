import { Injectable } from '@nestjs/common';
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
}
