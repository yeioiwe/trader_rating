import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PostService } from './post.service';
import { PostItem, PostPreviewList } from './post.types';

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
}
