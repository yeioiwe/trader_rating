import { BadRequestException, Injectable } from '@nestjs/common';
import { ScammerEntity } from 'apps/libs/db/entity/scammer.entity';
import { EntityManager } from 'typeorm';
import { ScammerCreateDto } from './scammers.dto';

@Injectable()
export class ScammersService {
    constructor(private em: EntityManager) {}

    async scammerCreate(dto: ScammerCreateDto) {
        const existingUrl = await this.em.findOne(ScammerEntity, { where: { url: dto.url } });
        if (existingUrl) throw new BadRequestException();

        const existingUsername = await this.em.findOne(ScammerEntity, { where: { tgUsername: dto.tgUsername } });
        if (existingUsername) throw new BadRequestException();

        const scammer = await this.em.create(ScammerEntity, { ...dto });

        const newScammer = await this.em.save(ScammerEntity, scammer);

        return newScammer.id;
    }
}
