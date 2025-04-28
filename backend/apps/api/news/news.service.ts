import { BadRequestException, Injectable } from '@nestjs/common';
import { NewsCommentEntity } from 'apps/libs/db/entity/news.comment.entity';
import { NewsEntity } from 'apps/libs/db/entity/news.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class NewsService {
    constructor(private em: EntityManager) {}

    async getList() {
        const news = await this.em.find(NewsEntity, { order: { date: 'DESC' } });

        const demoPosts = news.map(({ id, url, title, avatar, views, date }) => ({
            id,
            url,
            title,
            avatar,
            views,
            date,
        }));

        return { items: demoPosts };
    }

    async getTop() {
        const news = await this.em.find(NewsEntity, { order: { date: 'DESC' } });

        const demoPosts = news.slice(0, 4).map(({ id, url, title, avatar, views, date }) => ({
            id,
            url,
            title,
            avatar,
            views,
            date,
        }));

        return { items: demoPosts };
    }

    async getOne(url: string) {
        const news = await this.em.findOneBy(NewsEntity, { url });

        if (!news) throw new BadRequestException();

        return news;
    }

    async getComments(newsId: number) {
        const comments = await this.em.find(NewsCommentEntity, { where: { newsId }, order: { date: 'DESC' } });

        return { items: comments };
    }
}
