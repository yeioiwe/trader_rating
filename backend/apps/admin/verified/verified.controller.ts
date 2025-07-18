import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { VerifiedService } from './verified.service';
import { ApiOkResponse } from '@nestjs/swagger';
import {
    CreateSeoDto,
    VerifiedCreateComment,
    VerifiedCreateDto,
    VerifiedEditAboutDto,
    VerifiedUpdatePositionListDto,
} from './verified.dto';
import {
    SeoItem,
    VerifiedCommentList,
    VerifiedDemoProfileItemList,
    VerifiedProfileAbout,
    VerifiedProfileItem,
} from './verified.types';

@UseGuards(JwtGuard)
@Controller('verified')
export class VerifiedController {
    constructor(private verifiedService: VerifiedService) {}

    @Post('create')
    @ApiOkResponse({ type: Number })
    async create(@Body() body: VerifiedCreateDto): Promise<number> {
        return await this.verifiedService.verifiedCreate(body);
    }

    @Get('list')
    @ApiOkResponse({ type: VerifiedDemoProfileItemList })
    async getList(): Promise<VerifiedDemoProfileItemList> {
        return await this.verifiedService.getList();
    }

    @Get('one/:id')
    @ApiOkResponse({ type: VerifiedProfileItem })
    async getOne(@Param('id') projectId: number): Promise<VerifiedProfileItem> {
        return await this.verifiedService.getOne(projectId);
    }

    @Get('about/:id')
    @ApiOkResponse({ type: VerifiedProfileAbout })
    async getAbout(@Param('id') projectId: number): Promise<VerifiedProfileAbout> {
        return await this.verifiedService.getAbout(projectId);
    }

    @Post('about/:id')
    @ApiOkResponse()
    async editAbout(@Param('id') projectId: number, @Body() body: VerifiedEditAboutDto): Promise<void> {
        return await this.verifiedService.editAbout(projectId, body);
    }

    @Post('profile/:id')
    @ApiOkResponse()
    async editProfile(@Param('id') projectId: number, @Body() body: VerifiedCreateDto): Promise<void> {
        return await this.verifiedService.editProfile(projectId, body);
    }

    @Post('position')
    @ApiOkResponse()
    async updatePosition(@Body() body: VerifiedUpdatePositionListDto): Promise<void> {
        return await this.verifiedService.updatePosition(body);
    }

    @Post('comment/create/:id')
    @ApiOkResponse()
    async commentCreate(@Param('id') projectId: number, @Body() body: VerifiedCreateComment): Promise<void> {
        return await this.verifiedService.createComment(projectId, body);
    }

    @Post('comment/delete/:id')
    @ApiOkResponse()
    async deleteCreate(@Param('id') commentId: number): Promise<void> {
        return await this.verifiedService.deleteComment(commentId);
    }

    @Get('comment/:id')
    @ApiOkResponse({ type: VerifiedCommentList })
    async getCommentList(@Param('id') projectId: number): Promise<VerifiedCommentList> {
        return await this.verifiedService.getCommentList(projectId);
    }

    @Post('seo/create/:id')
    @ApiOkResponse()
    async editSeo(@Param('id') id: number, @Body() dto: CreateSeoDto): Promise<void> {
        return await this.verifiedService.seoCreate(id, dto);
    }

    @Get('seo/:id')
    @ApiOkResponse({ type: SeoItem })
    async getSeo(@Param('id') id: number): Promise<SeoItem> {
        return await this.verifiedService.getSeo(id);
    }
}
