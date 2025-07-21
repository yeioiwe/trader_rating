import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PostService } from './post.service';
import { PostCommentsList, PostItem, PostPreviewList, SeoItem } from './post.types';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Get('list')
    @ApiOkResponse({ type: PostPreviewList })
    async getList(): Promise<PostPreviewList> {
        return await this.postService.getList();
    }

    @Get('one/:url')
    @ApiOkResponse({ type: PostItem })
    async getOne(@Param('url') url: string): Promise<PostItem> {
        return await this.postService.getOne(url);
    }

    @Get('comments/:id')
    @ApiOkResponse({ type: PostCommentsList })
    async getComments(@Param('id') postId: number): Promise<PostCommentsList> {
        return await this.postService.getComments(postId);
    }

    @Get('seo/:id')
    @ApiOkResponse({ type: SeoItem })
    async getSeo(@Param('id') id: string): Promise<SeoItem> {
        return await this.postService.getSeo(id);
    }
}
