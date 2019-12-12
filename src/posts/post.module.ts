import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from '../../domain/post/post.entity';
// import { PostgresRepository } from '../../infrastructure/post/PostgresPostRepository';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    controllers: [PostController],
    providers: [PostService]
})

export class PostModule {
    
    constructor() {}

}