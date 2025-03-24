import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { ScammerCreateDto } from './scammers.dto';
import { ScammersService } from './scammers.service';
import { ScammerDemoProfileItemList, ScammerProfileItem } from './scammers.types';

@UseGuards(JwtGuard)
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

    @Get('one/:id')
    @ApiOkResponse({ type: ScammerProfileItem })
    async getOne(@Param('id') projectId: number): Promise<ScammerProfileItem> {
        return await this.scammersService.getOne(projectId);
    }
}
