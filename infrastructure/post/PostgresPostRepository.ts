import { IPostRepository } from "domain/post/IPostRepository";
import { PostEntity } from '../../domain/post/post.entity';
import { Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { IPost } from "domain/post/IPost";
import { CreatePostDto } from "src/posts/dto/CreatePostDto";
import { Connection } from 'typeorm';
import { UpdatePostDto } from "src/posts/dto/UpdatePostDto";


export class PostgresRepository implements IPostRepository {

    constructor(
        @Inject('PostRepository') private readonly postRepository: Repository<IPost>,
        private readonly connection: Connection
    ){}

    private Post = this.connection.getRepository(PostEntity);

    public async GetAllPosts(): Promise<PostEntity[]> {
        return await this.Post.find();
    }

    public async GetPostById(id: string): Promise<PostEntity> {
        return await this.Post.findOne(id);
    }

    public async CreatePost(data: CreatePostDto): Promise<PostEntity> {
        return await this.Post.save({
            title: data.title,
            text: data.text,
            date: Date.now(),
            comments: []
        });
    }

    public async DeletePost(id: string): Promise<PostEntity> {
        const post = await this.Post.findOne(id);
        return await this.Post.remove(post)
    }

    public async UpdatePost(data: UpdatePostDto): Promise<PostEntity> {
        const post = await this.Post.findOne({id: data.id});

        const comments = [];
        comments.push(...post.comments, data.comments);

        post.text = data.text;
        post.title = data.title;
        post.comments = comments;
        return await this.postRepository.save(post);
    }
}