import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerifiedService } from './verified.service';
import { VerifiedController } from './verified.controller';
import { VerifiedEntity } from 'apps/libs/db/entity/verified.entity';
import { VerifiedCommentEntity } from 'apps/libs/db/entity/verified.comment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VerifiedEntity, VerifiedCommentEntity])],
    providers: [VerifiedService],
    controllers: [VerifiedController],
})
export class VerifiedModule {}
