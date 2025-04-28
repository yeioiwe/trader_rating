import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsCommentEntity } from 'apps/libs/db/entity/news.comment.entity';
import { NewsEntity } from 'apps/libs/db/entity/news.entity';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
    imports: [TypeOrmModule.forFeature([NewsEntity, NewsCommentEntity])],
    providers: [NewsService],
    controllers: [NewsController],
})
export class NewsModule {}
