import {Injectable, Inject} from '@nestjs/common';
import { PostEntity } from '../../domain/post/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/CreatePostDto';
import { UpdatePostDto } from './dto/UpdatePostDto';
import { IPostRepository } from 'domain/post/IPostRepository';

@Injectable()
export class PostService {
	constructor(
        @InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>,
        @Inject('IPostRepository') private readonly postRepo: IPostRepository
    ) {}

    async getAllPosts (): Promise<PostEntity[]> {
        return this.postRepository.find({relations:["comments"]});

        // return this.postRepo.GetAllPosts({relations:["comments"]});
    }

    async createPost (data: CreatePostDto): Promise<PostEntity> {
        return await this.postRepository.save(data);
    }

    async getPostById (id: string): Promise<PostEntity> {
        return await this.postRepository.findOne(id);   
    }

    async updatePost(data: UpdatePostDto): Promise<PostEntity> {
        const comment = await this.postRepository.findOne({id: data.id});
        comment.text = data.text;
        return await this.postRepository.save(comment);
    }

    async deletePost(id: string): Promise<PostEntity> {
        const comment = await this.postRepository.findOne(id);
        return await this.postRepository.remove(comment);
    }

}