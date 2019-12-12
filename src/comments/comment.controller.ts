import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from '../../domain/comment/comment.entity';
import { IComment } from '../../domain/comment/IComment';
import { CreateCommentDto } from './dto/CreateCommentDto';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService
   ) {}

  @Get()
  async getAllComments(): Promise<Comment[]> {
    return await this.commentsService.getAllComments();
  }

  @Get(':id')
  async getCommentById(@Param('id') id: string): Promise<Comment> {
    return await this.commentsService.getCommentById(id);
  }

  @Post()
  async createComment(@Body() data: CreateCommentDto): Promise<Comment> {
    return await this.commentsService.createComment(data)
  }

  @Put()
  async updateComment(@Body() data: IComment): Promise<Comment> {
    return await this.commentsService.updateComment(data);
  }

  @Delete()
  async deleteComment(@Param('id') id: string): Promise<Comment> {
    return await this.commentsService.deleteComment(id);
  }

}
