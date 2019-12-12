
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsController } from './comment.controller';
import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from '../../domain/comment/comment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Comment])],
    controllers: [CommentsController],
    providers: [CommentsService]
})

export class CommentModule {
    
    constructor() {

    }

}