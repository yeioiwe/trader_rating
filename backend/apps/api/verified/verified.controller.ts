import { Controller, Get, Param } from '@nestjs/common';
import { VerifiedService } from './verified.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { VerifiedCommentList, VerifiedDemoProfileItemList, VerifiedProfileItem } from './verified.types';

@Controller('verified')
export class VerifiedController {
    constructor(private verifiedService: VerifiedService) {}

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
}
