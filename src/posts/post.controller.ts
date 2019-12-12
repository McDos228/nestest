import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from '../../domain/post/post.entity';
import { CreatePostDto } from './dto/CreatePostDto';
import { UpdatePostDto } from './dto/UpdatePostDto';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService
   ) {}

  @Get()
  async getAllPosts(): Promise<PostEntity[]> {
    return await this.postService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<PostEntity> {
    return await this.postService.getPostById(id);
  }

  @Post()
  async createComment(@Body() data: CreatePostDto): Promise<PostEntity> {
    return await this.postService.createPost(data)
  }

  @Put()
  async updateComment(@Body() data: UpdatePostDto): Promise<PostEntity> {
    return await this.postService.updatePost(data);
  }

  @Delete()
  async deleteComment(@Param('id') id: string): Promise<PostEntity> {
    return await this.postService.deletePost(id);
  }

}
