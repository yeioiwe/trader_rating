import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerifiedController } from './verified.controller';
import { VerifiedService } from './verified.service';
import { VerifiedCommentEntity } from 'apps/libs/db/entity/verified.comment.entity';
import { VerifiedEntity } from 'apps/libs/db/entity/verified.entity';

@Module({
    imports: [JwtModule, TypeOrmModule.forFeature([VerifiedCommentEntity, VerifiedEntity])],
    providers: [VerifiedService],
    controllers: [VerifiedController],
})
export class VerifiedModule {}
