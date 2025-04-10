import { BadRequestException, Injectable } from '@nestjs/common';
import { PostEntity } from 'apps/libs/db/entity/post.entity';
import { EntityManager } from 'typeorm';
import { PostCreatePreviewDto, PostEditContentDto } from './post.dto';

@Injectable()
export class PostService {
    constructor(private em: EntityManager) {}

    async createPreview(dto: PostCreatePreviewDto) {
        const post = await this.em.create(PostEntity, { ...dto, post: '' });

        const cretedPost = await this.em.save(PostEntity, post);

        return cretedPost.id;
    }

    async editPreview(dto: PostCreatePreviewDto, id: number) {
        await this.em.update(PostEntity, { id }, { ...dto });
    }

    async editContent(dto: PostEditContentDto, id: number) {
        await this.em.update(PostEntity, { id }, { ...dto });
    }

    async getList() {
        const posts = await this.em.find(PostEntity, { order: { date: 'DESC' } });

        const demoPosts = posts.map(({ id, title, likes, views, date }) => ({ id, title, likes, views, date }));
        return { items: demoPosts };
    }

    async getOne(id: number) {
        const post = await this.em.findOneBy(PostEntity, { id });

        if (!post) throw new BadRequestException();

        return post;
    }

    async deletePost(id: number) {
        await this.em.delete(PostEntity, { id });
    }
}
