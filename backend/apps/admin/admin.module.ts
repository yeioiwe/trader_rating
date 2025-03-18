import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DbModule } from 'apps/libs/db/db.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DbModule,
        AuthModule,
    ],
    controllers: [],
})
export class AdminModule {}
