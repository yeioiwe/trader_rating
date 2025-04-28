import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCommentEntity } from 'apps/libs/db/entity/post.comment.entity';
import { PostEntity } from 'apps/libs/db/entity/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity, PostCommentEntity])],
    providers: [PostService],
    controllers: [PostController],
})
export class PostModule {}
