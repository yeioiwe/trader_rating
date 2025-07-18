import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import {
    CreateImagesBannerDto,
    EditFooterStripDto,
    EditLawyerBannerDto,
    EditLawyerLayoutDto,
    EditLawyerProfileDto,
    EditYoutubeLayoutDto,
    HeaderBannerEditDto,
    TestDto,
} from './pages.dto';
import { PagesService } from './pages.service';
import {
    CommentCreateItemList,
    FooterStripItem,
    HeaderBannerItem,
    ImagesBannerList,
    LawyerBannerItem,
    LawyerLayoutItem,
    LawyerProfileItem,
    LawyerVisible,
    ReviewList,
    YoutubeLayoutItem,
} from './pages.types';
import { CommentType } from 'apps/libs/db/entity/comment.create.entity';

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

    @Post('lawyer_layout')
    @ApiOkResponse()
    async editLawyerLayout(@Body() dto: EditLawyerLayoutDto): Promise<void> {
        return await this.pagesService.editLawyerLayout(dto);
    }

    @Get('lawyer_layout')
    @ApiOkResponse({ type: LawyerLayoutItem })
    async getLawyerLayout(): Promise<LawyerLayoutItem> {
        return await this.pagesService.getLawyerLayout();
    }

    @Get('review')
    @ApiOkResponse({ type: ReviewList })
    async getReviewList(): Promise<ReviewList> {
        return await this.pagesService.getReviewList();
    }

    @Post('review/delete/:id')
    @ApiOkResponse()
    async deleteReview(@Param('id') reviewId: number): Promise<void> {
        return await this.pagesService.deleteReview(reviewId);
    }

    @Post('lawyer_profile')
    @ApiOkResponse()
    async editLawyerProfile(@Body() dto: EditLawyerProfileDto): Promise<void> {
        return await this.pagesService.editLawyerProfile(dto);
    }

    @Get('lawyer_profile')
    @ApiOkResponse({ type: LawyerProfileItem })
    async getLawyerProfile(): Promise<LawyerProfileItem> {
        return await this.pagesService.getLawyerProfile();
    }

    @Post('lawyer_visible')
    @ApiOkResponse()
    async toggleLawyerVisible(@Body() dto: TestDto): Promise<void> {
        console.log(dto);
        return await this.pagesService.toggleLawyerVisible();
    }

    @Get('lawyer_visible')
    @ApiOkResponse({ type: LawyerVisible })
    async getLawyerVisible(): Promise<LawyerVisible> {
        return await this.pagesService.getLawyerVisible();
    }

    @Get('comment/request_list/:type/:id')
    @ApiParam({ name: 'type', enum: CommentType })
    @ApiParam({ name: 'id', type: Number })
    @ApiOkResponse({ type: CommentCreateItemList })
    async getCommentRequestList(
        @Param('type') type: CommentType,
        @Param('id') projectId: number,
    ): Promise<CommentCreateItemList> {
        return await this.pagesService.getCommentRequestList(type, projectId);
    }

    @Post('comment/delete/:id')
    @ApiOkResponse()
    async deleteRequestComment(@Param('id') id: number): Promise<void> {
        await this.pagesService.deleteRequestComment(id);
    }

    @Post('comment/save/:id')
    @ApiOkResponse()
    async saveRequestComment(@Param('id') id: number): Promise<void> {
        await this.pagesService.saveRequestComment(id);
    }
}
