import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ScammerCreateDto } from './scammers.dto';
import { ScammersService } from './scammers.service';

@Controller('scammers')
export class ScammersController {
    constructor(private scammersService: ScammersService) {}

    @Post('create')
    @ApiOkResponse({ type: Number })
    async create(@Body() body: ScammerCreateDto): Promise<Number> {
        return await this.scammersService.scammerCreate(body);
    }
}
