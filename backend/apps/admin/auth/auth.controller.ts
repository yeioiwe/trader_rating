import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthResponse } from './auth.types';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @ApiOkResponse({ type: AuthResponse })
    async login(@Body() body: AuthDto): Promise<AuthResponse> {
        const rv = await this.authService.login(body);
        if (!rv) throw new NotFoundException();

        return rv;
    }
}
