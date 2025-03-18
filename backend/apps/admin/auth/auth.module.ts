import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from 'apps/libs/db/entity/admin.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [JwtModule, TypeOrmModule.forFeature([AdminEntity])],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
