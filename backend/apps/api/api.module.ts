import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from 'apps/libs/db/db.module';
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
        ScammersModule,
        PostModule,
        PagesModule,
        NewsModule,
        VerifiedModule,
    ],
    controllers: [],
    providers: [],
})
export class ApiModule {}
