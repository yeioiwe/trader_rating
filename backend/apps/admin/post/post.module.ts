import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'apps/libs/db/entity/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
    imports: [JwtModule, TypeOrmModule.forFeature([PostEntity])],
    providers: [PostService],
    controllers: [PostController],
})
export class PostModule {}
