import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { PagesService } from './pages.service';
import {
    FooterStripItem,
    HeaderBannerItem,
    ImagesBannerList,
    LawyerBannerItem,
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

    @Get('footer_strip')
    @ApiOkResponse({ type: FooterStripItem })
    async getFooterStrip(): Promise<FooterStripItem> {
        return await this.pagesService.getFooterStrip();
    }
}
