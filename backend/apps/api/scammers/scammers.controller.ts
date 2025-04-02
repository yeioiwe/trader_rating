import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ScammersService } from './scammers.service';
import { ScammerDemoProfileItemList, ScammerProfileItem } from './scammers.types';

@Controller('scammers')
export class ScammersController {
    constructor(private scammersService: ScammersService) {}

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
}
