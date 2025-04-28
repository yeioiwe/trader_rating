import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { PostCreateComment, PostCreatePreviewDto, PostEditContentDto } from './post.dto';
import { PostService } from './post.service';
import { PostCommentList, PostItem, PostPreviewList } from './post.types';

@UseGuards(JwtGuard)
@Controller('post')
export class PostController {
    constructor(private postService: PostService) {}

    @Post('create')
    @ApiOkResponse({ type: Number })
    async createPreview(@Body() body: PostCreatePreviewDto): Promise<number> {
        return await this.postService.createPreview(body);
    }

    @Post('edit/:id')
    @ApiOkResponse()
    async editPreview(@Body() body: PostCreatePreviewDto, @Param('id') postId: number): Promise<void> {
        return await this.postService.editPreview(body, postId);
    }

    @Post('edit/content/:id')
    @ApiOkResponse()
    async editContent(@Body() body: PostEditContentDto, @Param('id') postId: number): Promise<void> {
        return await this.postService.editContent(body, postId);
    }

    @Get('list')
    @ApiOkResponse({ type: PostPreviewList })
    async getList(): Promise<PostPreviewList> {
        return await this.postService.getList();
    }

    @Get('post/:id')
    @ApiOkResponse({ type: PostItem })
    async getOne(@Param('id') postId: number): Promise<PostItem> {
        return await this.postService.getOne(postId);
    }

    @Post('delete/:id')
    @ApiOkResponse()
    async delete(@Param('id') postId: number) {
        await this.postService.deletePost(postId);
    }

    @Post('comment/create/:id')
    @ApiOkResponse()
    async commentCreate(@Param('id') postId: number, @Body() dto: PostCreateComment): Promise<void> {
        return this.postService.createComment(postId, dto);
    }

    @Post('comment/delete/:id')
    @ApiOkResponse()
    async deleteComment(@Param('id') commentId: number): Promise<void> {
        return this.postService.deleteComment(commentId);
    }

    @Get('comment/:id')
    @ApiOkResponse({ type: PostCommentList })
    async getCommentList(@Param('id') postId: number): Promise<PostCommentList> {
        return await this.postService.getCommentList(postId);
    }
}
