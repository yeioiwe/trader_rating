import { BadRequestException, Injectable } from '@nestjs/common';
import { NewsCommentEntity } from 'apps/libs/db/entity/news.comment.entity';
import { NewsEntity } from 'apps/libs/db/entity/news.entity';
import { EntityManager } from 'typeorm';
import { NewsCreateComment, NewsCreateDto } from './news.dto';

@Injectable()
export class NewsService {
    constructor(private em: EntityManager) {}

    async create(dto: NewsCreateDto) {
        const news = this.em.create(NewsEntity, { ...dto, notification: false });

        await this.em.save(NewsEntity, news);
    }

    async edit(id: number, dto: NewsCreateDto) {
        const news = await this.em.findOneBy(NewsEntity, { id });

        if (!news) throw new BadRequestException();

        await this.em.update(NewsEntity, { id: news.id }, { ...dto });
    }

    async getList() {
        const newsList = await this.em.find(NewsEntity);

        const demoNews = newsList.map(({ id, title, date, notification }) => ({ id, title, date, notification }));

        return { items: demoNews };
    }

    async getOne(id: number) {
        const news = await this.em.findOneBy(NewsEntity, { id });

        if (!news) throw new BadRequestException();

        return news;
    }

    async createComment(newsId: number, dto: NewsCreateComment) {
        const comment = this.em.create(NewsCommentEntity, { ...dto, newsId });

        await this.em.save(NewsCommentEntity, comment);
    }

    async deleteComment(id: number) {
        await this.em.delete(NewsCommentEntity, { id });
    }

    async getCommentList(newsId: number) {
        const comments = await this.em.find(NewsCommentEntity, { where: { newsId }, order: { date: 'DESC' } });

        return { items: comments };
    }
}
