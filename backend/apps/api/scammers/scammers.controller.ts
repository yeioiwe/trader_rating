import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ScammersService } from './scammers.service';
import { ScammerCommentList, ScammerDemoProfileItemList, ScammerProfileItem, SeoItem } from './scammers.types';

@Controller('scammers')
export class ScammersController {
    constructor(private scammersService: ScammersService) {}

    @Get('top_five')
    @ApiOkResponse({ type: ScammerDemoProfileItemList })
    async getTopFive(): Promise<ScammerDemoProfileItemList> {
        return await this.scammersService.getTopFive();
    }

    @Get('list')
    @ApiOkResponse({ type: ScammerDemoProfileItemList })
    async getList(): Promise<ScammerDemoProfileItemList> {
        return await this.scammersService.getList();
    }

    @Get('project/:id')
    @ApiOkResponse({ type: ScammerProfileItem })
    async getOne(@Param('id') profileId: string): Promise<ScammerProfileItem> {
        return await this.scammersService.getOne(profileId);
    }

    @Get('comment/:id')
    @ApiOkResponse({ type: ScammerCommentList })
    async getCommentList(@Param('id') profileId: number): Promise<ScammerCommentList> {
        return await this.scammersService.getCommentList(profileId);
    }

    @Get('seo/:id')
    @ApiOkResponse({ type: SeoItem })
    async getSeo(@Param('id') id: string): Promise<SeoItem> {
        return await this.scammersService.getSeo(id);
    }
}
