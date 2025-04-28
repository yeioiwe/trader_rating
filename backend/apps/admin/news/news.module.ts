import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsCommentEntity } from 'apps/libs/db/entity/news.comment.entity';
import { NewsEntity } from 'apps/libs/db/entity/news.entity';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
    imports: [JwtModule, TypeOrmModule.forFeature([NewsEntity, NewsCommentEntity])],
    providers: [NewsService],
    controllers: [NewsController],
})
export class NewsModule {}
