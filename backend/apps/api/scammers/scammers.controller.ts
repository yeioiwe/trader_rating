import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ScammersService } from './scammers.service';
import { ScammerDemoProfileItemList } from './scammers.types';

@Controller('scammers')
export class ScammersController {
    constructor(private scammersService: ScammersService) {}

    @Get('list')
    @ApiOkResponse({ type: ScammerDemoProfileItemList })
    async getList(): Promise<ScammerDemoProfileItemList> {
        return await this.scammersService.getList();
    }
}
