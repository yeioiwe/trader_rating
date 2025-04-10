import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DbModule } from 'apps/libs/db/db.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { ScammersModule } from './scammers/scammers.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DbModule,
        AuthModule,
        ScammersModule,
        PostModule,
    ],
    controllers: [],
})
export class AdminModule {}
