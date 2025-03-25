import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { ScammerCreateDto, ScammerEditAboutDto } from './scammers.dto';
import { ScammersService } from './scammers.service';
import { ScammerDemoProfileItemList, ScammerProfileAbout, ScammerProfileItem } from './scammers.types';

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

    @Get('about/:id')
    @ApiOkResponse({ type: ScammerProfileAbout })
    async getAbout(@Param('id') projectId: number): Promise<ScammerProfileAbout> {
        return await this.scammersService.getAbout(projectId);
    }

    @Post('about/:id')
    @ApiOkResponse()
    async editAbout(@Param('id') projectId: number, @Body() body: ScammerEditAboutDto): Promise<void> {
        return await this.scammersService.editAbout(projectId, body);
    }
}
