import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { NewsService } from './news.service';
import { NewsCommentList, NewsItem, NewsPreviewList } from './news.types';

@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) {}

    @Get('list')
    @ApiOkResponse({ type: NewsPreviewList })
    async getList(): Promise<NewsPreviewList> {
        return await this.newsService.getList();
    }

    @Get('top')
    @ApiOkResponse({ type: NewsPreviewList })
    async getTop(): Promise<NewsPreviewList> {
        return await this.newsService.getTop();
    }

    @Get('one/:url')
    @ApiOkResponse({ type: NewsItem })
    async getOne(@Param('url') url: string): Promise<NewsItem> {
        return await this.newsService.getOne(url);
    }

    @Get('comments/:id')
    @ApiOkResponse({ type: NewsCommentList })
    async getComments(@Param('id') newsId: number): Promise<NewsCommentList> {
        return await this.newsService.getComments(newsId);
    }
}
