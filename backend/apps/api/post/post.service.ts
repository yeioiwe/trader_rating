import { BadRequestException, Injectable } from '@nestjs/common';
import { PostCommentEntity } from 'apps/libs/db/entity/post.comment.entity';
import { PostEntity } from 'apps/libs/db/entity/post.entity';
import { EntityManager } from 'typeorm';
import { SeoItem } from './post.types';

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

    async getComments(postId: number) {
        const comments = await this.em.find(PostCommentEntity, { where: { postId }, order: { date: 'DESC' } });

        return { items: comments };
    }

    async getSeo(id: string): Promise<SeoItem> {
        console.log({ id });
        const profile = await this.em.findOneBy(PostEntity, { url: id });
        console.log({ profile });

        if (!profile) throw new BadRequestException();

        return { title: profile.seo_title, description: profile.seo_description };
    }
}
