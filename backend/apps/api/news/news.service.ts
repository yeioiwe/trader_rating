import { BadRequestException, Injectable } from '@nestjs/common';
import { NewsCommentEntity } from 'apps/libs/db/entity/news.comment.entity';
import { NewsEntity } from 'apps/libs/db/entity/news.entity';
import { EntityManager } from 'typeorm';
import { SeoItem } from './news.types';

@Injectable()
export class NewsService {
    constructor(private em: EntityManager) {}

    async getList() {
        const news = await this.em.find(NewsEntity, {
            select: ['id', 'url', 'title', 'avatar', 'views', 'date'],
            order: { date: 'DESC' },
        });

        // const demoPosts = news.map(({ id, url, title, avatar, views, date }) => ({
        //     id,
        //     url,
        //     title,
        //     avatar,
        //     views,
        //     date,
        // }));

        return { items: news };
    }

    async getTop() {
        const news = await this.em.find(NewsEntity, {
            select: ['id', 'url', 'title', 'avatar', 'views', 'date'],
            order: { date: 'DESC' },
        });

        const demoPosts = news.slice(0, 4);

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

    async getSeo(id: string): Promise<SeoItem> {
        const profile = await this.em.findOneBy(NewsEntity, { url: id });

        if (!profile) throw new BadRequestException();

        return { title: profile.seo_title, description: profile.seo_description };
    }
}
