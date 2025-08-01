import { Controller, Get, Param } from '@nestjs/common';
import { VerifiedService } from './verified.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { SeoItem, VerifiedCommentList, VerifiedDemoProfileItemList, VerifiedProfileItem } from './verified.types';

@Controller('verified')
export class VerifiedController {
    constructor(private verifiedService: VerifiedService) {}

    @Get('top_five')
    @ApiOkResponse({ type: VerifiedDemoProfileItemList })
    async getTopFive(): Promise<VerifiedDemoProfileItemList> {
        return await this.verifiedService.getTopFive();
    }

    @Get('list')
    @ApiOkResponse({ type: VerifiedDemoProfileItemList })
    async getList(): Promise<VerifiedDemoProfileItemList> {
        return await this.verifiedService.getList();
    }

    @Get('project/:id')
    @ApiOkResponse({ type: VerifiedProfileItem })
    async getOne(@Param('id') profileId: string): Promise<VerifiedProfileItem> {
        return await this.verifiedService.getOne(profileId);
    }

    @Get('comment/:id')
    @ApiOkResponse({ type: VerifiedCommentList })
    async getCommentList(@Param('id') profileId: number): Promise<VerifiedCommentList> {
        return await this.verifiedService.getCommentList(profileId);
    }

    @Get('seo/:id')
    @ApiOkResponse({ type: SeoItem })
    async getSeo(@Param('id') id: string): Promise<SeoItem> {
        return await this.verifiedService.getSeo(id);
    }
}
