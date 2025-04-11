import { BadRequestException, Injectable } from '@nestjs/common';
import { PostEntity } from 'apps/libs/db/entity/post.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class PostService {
    constructor(private em: EntityManager) {}

    async getList() {
        const posts = await this.em.find(PostEntity, { order: { date: 'DESC' } });

        const demoPosts = posts.map(({ id, title, likes, views, date, readTime, url }) => ({
            id,
            url,
            title,
            likes,
            views,
            date,
            readTime,
        }));

        return { items: demoPosts };
    }

    async getOne(url: string) {
        const post = await this.em.findOneBy(PostEntity, { url });

        if (!post) throw new BadRequestException();

        return post;
    }
}
