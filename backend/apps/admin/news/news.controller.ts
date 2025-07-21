import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { CreateSeoDto, NewsCreateComment, NewsCreateDto } from './news.dto';
import { NewsService } from './news.service';
import { NewsCommentList, NewsItem, NewsPreviewList, SeoItem } from './news.types';

@UseGuards(JwtGuard)
@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) {}

    @Post('create')
    @ApiOkResponse()
    async create(@Body() dto: NewsCreateDto): Promise<void> {
        return await this.newsService.create(dto);
    }

    @Post('edit/:id')
    @ApiOkResponse()
    async edit(@Body() dto: NewsCreateDto, @Param('id') newsId: number): Promise<void> {
        return await this.newsService.edit(newsId, dto);
    }

    @Get('list')
    @ApiOkResponse({ type: NewsPreviewList })
    async getList(): Promise<NewsPreviewList> {
        return await this.newsService.getList();
    }

    @Get('one/:id')
    @ApiOkResponse({ type: NewsItem })
    async getOne(@Param('id') newsId: number): Promise<NewsItem> {
        return await this.newsService.getOne(newsId);
    }

    @Post('comment/create/:id')
    @ApiOkResponse()
    async commentCreate(@Param('id') newsId: number, @Body() dto: NewsCreateComment): Promise<void> {
        return this.newsService.createComment(newsId, dto);
    }

    @Post('comment/delete/:id')
    @ApiOkResponse()
    async deleteComment(@Param('id') commentId: number): Promise<void> {
        return this.newsService.deleteComment(commentId);
    }

    @Get('comment/:id')
    @ApiOkResponse({ type: NewsCommentList })
    async getCommentList(@Param('id') newsId: number): Promise<NewsCommentList> {
        return await this.newsService.getCommentList(newsId);
    }

    @Post('seo/create/:id')
    @ApiOkResponse()
    async editSeo(@Param('id') id: number, @Body() dto: CreateSeoDto): Promise<void> {
        return await this.newsService.seoCreate(id, dto);
    }

    @Get('seo/:id')
    @ApiOkResponse({ type: SeoItem })
    async getSeo(@Param('id') id: number): Promise<SeoItem> {
        return await this.newsService.getSeo(id);
    }
}
