import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import {
    CreateImagesBannerDto,
    EditFooterStripDto,
    EditLawyerBannerDto,
    EditYoutubeLayoutDto,
    HeaderBannerEditDto,
} from './pages.dto';
import { PagesService } from './pages.service';
import {
    FooterStripItem,
    HeaderBannerItem,
    ImagesBannerList,
    LawyerBannerItem,
    YoutubeLayoutItem,
} from './pages.types';

@UseGuards(JwtGuard)
@Controller('pages')
export class PagesController {
    constructor(private pagesService: PagesService) {}

    @Post('header_banner')
    @ApiOkResponse()
    async editHeaderBanner(@Body() dto: HeaderBannerEditDto): Promise<void> {
        return await this.pagesService.editHeaderBanner(dto);
    }

    @Get('header_banner')
    @ApiOkResponse({ type: HeaderBannerItem })
    async getHeaderBanner(): Promise<HeaderBannerItem> {
        return await this.pagesService.getHeaderBanner();
    }

    @Post('images_banner')
    @ApiOkResponse()
    async createImagesBanner(@Body() dto: CreateImagesBannerDto): Promise<void> {
        return await this.pagesService.createImagesBanner(dto);
    }

    @Post('images_banner/delete/:id')
    @ApiOkResponse()
    async deleteImagesBanner(@Param('id') imageId: number): Promise<void> {
        return await this.pagesService.deleteImagesBanner(imageId);
    }

    @Get('images_banner')
    @ApiOkResponse({ type: ImagesBannerList })
    async getImagesBanner(): Promise<ImagesBannerList> {
        return await this.pagesService.getImagesBanner();
    }

    @Post('lawyer_banner')
    @ApiOkResponse()
    async editLawyerBanner(@Body() dto: EditLawyerBannerDto): Promise<void> {
        return await this.pagesService.editLawyerBanner(dto);
    }

    @Get('lawyer_banner')
    @ApiOkResponse({ type: LawyerBannerItem })
    async getLawyerBanner(): Promise<LawyerBannerItem> {
        return await this.pagesService.getLawyerBanner();
    }

    @Post('youtube_layout')
    @ApiOkResponse()
    async editYoutubeLayout(@Body() dto: EditYoutubeLayoutDto): Promise<void> {
        return await this.pagesService.editYoutubeLayout(dto);
    }

    @Get('youtube_layout')
    @ApiOkResponse({ type: YoutubeLayoutItem })
    async getYoutubeLayout(): Promise<YoutubeLayoutItem> {
        return await this.pagesService.getYoutubeLayout();
    }

    @Post('footer_strip')
    @ApiOkResponse()
    async editFooterStrip(@Body() dto: EditFooterStripDto): Promise<void> {
        return await this.pagesService.editFooterStrip(dto);
    }

    @Get('footer_strip')
    @ApiOkResponse({ type: FooterStripItem })
    async getFooterStrip(): Promise<FooterStripItem> {
        return await this.pagesService.getFooterStrip();
    }
}
