import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScammersController } from './scammers.controller';
import { ScammersService } from './scammers.service';

@Module({
    imports: [JwtModule, TypeOrmModule.forFeature([])],
    providers: [ScammersService],
    controllers: [ScammersController],
})
export class ScammersModule {}
