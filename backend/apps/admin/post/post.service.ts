import { BadRequestException, Injectable } from '@nestjs/common';
import { PostCommentEntity } from 'apps/libs/db/entity/post.comment.entity';
import { PostEntity } from 'apps/libs/db/entity/post.entity';
import { EntityManager } from 'typeorm';
import { CreateSeoDto, PostCreateComment, PostCreatePreviewDto, PostEditContentDto } from './post.dto';
import { SeoItem } from './post.types';

@Injectable()
export class PostService {
    constructor(private em: EntityManager) {}

    async createPreview(dto: PostCreatePreviewDto) {
        const post = this.em.create(PostEntity, { ...dto, post: '', notification: false });

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

        const demoPosts = posts.map(({ id, title, likes, views, date, notification }) => ({
            id,
            title,
            likes,
            views,
            date,
            notification,
        }));
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

    async createComment(postId: number, dto: PostCreateComment) {
        const comment = this.em.create(PostCommentEntity, { ...dto, postId });

        await this.em.save(PostCommentEntity, comment);
    }

    async deleteComment(id: number) {
        await this.em.delete(PostCommentEntity, { id });
    }

    async getCommentList(postId: number) {
        const comments = await this.em.find(PostCommentEntity, { where: { postId }, order: { date: 'DESC' } });

        return { items: comments };
    }

    async seoCreate(id: number, dto: CreateSeoDto) {
        await this.em.update(PostEntity, { id }, { seo_title: dto.title, seo_description: dto.description });
    }

    async getSeo(id: number): Promise<SeoItem> {
        const profile = await this.em.findOneBy(PostEntity, { id });

        if (!profile) throw new BadRequestException();

        return { title: profile.seo_title, description: profile.seo_description };
    }
}
