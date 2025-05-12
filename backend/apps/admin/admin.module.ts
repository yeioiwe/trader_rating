import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { DbModule } from 'apps/libs/db/db.module';
import { AuthModule } from './auth/auth.module';
import { NewsModule } from './news/news.module';
import { PagesModule } from './pages/pages.module';
import { PostModule } from './post/post.module';
import { ScammersModule } from './scammers/scammers.module';
import { VerifiedModule } from './verified/verified.module';
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DbModule,
        AuthModule,
        ScammersModule,
        PostModule,
        PagesModule,
        NewsModule,
        VerifiedModule,
    ],
    controllers: [],
})
export class AdminModule {}
