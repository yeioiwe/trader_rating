import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ScammerCreateDto } from './scammers.dto';
import { ScammersService } from './scammers.service';
import { ScammerDemoProfileItemList } from './scammers.types';

@Controller('scammers')
export class ScammersController {
    constructor(private scammersService: ScammersService) {}

    @Post('create')
    @ApiOkResponse({ type: Number })
    async create(@Body() body: ScammerCreateDto): Promise<Number> {
        return await this.scammersService.scammerCreate(body);
    }

    @Get('list')
    @ApiOkResponse({ type: ScammerDemoProfileItemList })
    async getList(): Promise<ScammerDemoProfileItemList> {
        return await this.scammersService.getList();
    }
}
