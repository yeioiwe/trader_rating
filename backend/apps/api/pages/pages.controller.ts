import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateCommentDto, ReviewRequestDto } from './pages.dto';
import { PagesService } from './pages.service';
import {
    FooterStripItem,
    HeaderBannerItem,
    ImagesBannerList,
    LawyerBannerItem,
    LawyerLayoutItem,
    LawyerProfileItem,
    SearchItemList,
    YoutubeLayoutItem,
} from './pages.types';

@Controller('pages')
export class PagesController {
    constructor(private pagesService: PagesService) {}

    @Get('header_banner')
    @ApiOkResponse({ type: HeaderBannerItem })
    async getHeaderBanner(): Promise<HeaderBannerItem> {
        return await this.pagesService.getHeaderBanner();
    }

    @Get('images_banner')
    @ApiOkResponse({ type: ImagesBannerList })
    async getImagesBanner(): Promise<ImagesBannerList> {
        return await this.pagesService.getImagesBanner();
    }

    @Get('lawyer_banner')
    @ApiOkResponse({ type: LawyerBannerItem })
    async getLawyerBanner(): Promise<LawyerBannerItem> {
        return await this.pagesService.getLawyerBanner();
    }

    @Get('youtube_layout')
    @ApiOkResponse({ type: YoutubeLayoutItem })
    async getYoutubeLayout(): Promise<YoutubeLayoutItem> {
        return await this.pagesService.getYoutubeLayout();
    }

    @Get('lawyer_layout')
    @ApiOkResponse({ type: LawyerLayoutItem })
    async getLawyerLayout(): Promise<LawyerLayoutItem> {
        return await this.pagesService.getLawyerLayout();
    }

    @Get('footer_strip')
    @ApiOkResponse({ type: FooterStripItem })
    async getFooterStrip(): Promise<FooterStripItem> {
        return await this.pagesService.getFooterStrip();
    }

    @Post('review/create')
    @ApiOkResponse()
    async createReviewRequest(@Body() dto: ReviewRequestDto): Promise<void> {
        return await this.pagesService.createReviewRequest(dto);
    }

    @Get('lawyer_profile')
    @ApiOkResponse({ type: LawyerProfileItem })
    async getLawyerProfile(): Promise<LawyerProfileItem> {
        return await this.pagesService.getLawyerProfile();
    }

    @Post('create_comment')
    @ApiOkResponse()
    async createComment(@Body() dto: CreateCommentDto): Promise<void> {
        return await this.pagesService.createComment(dto);
    }

    @Get('search_list')
    @ApiOkResponse({ type: SearchItemList })
    async getSaerchList(): Promise<SearchItemList> {
        return await this.pagesService.getSaerchList();
    }
}
