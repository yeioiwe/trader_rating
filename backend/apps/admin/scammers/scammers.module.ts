import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScammerEntity } from 'apps/libs/db/entity/scammer.entity';
import { ScammersController } from './scammers.controller';
import { ScammersService } from './scammers.service';

@Module({
    imports: [JwtModule, TypeOrmModule.forFeature([ScammerEntity])],
    providers: [ScammersService],
    controllers: [ScammersController],
})
export class ScammersModule {}
