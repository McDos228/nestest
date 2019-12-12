import { PostEntity } from "./post.entity";
import { CreatePostDto } from "src/posts/dto/CreatePostDto";
import { UpdatePostDto } from "src/posts/dto/UpdatePostDto";

export interface IPostRepository {
    GetAllPosts(): Promise<PostEntity[]>
    GetPostById(id: string): Promise<PostEntity>
    CreatePost(data: CreatePostDto): Promise<PostEntity>
    UpdatePost(data: UpdatePostDto): Promise<PostEntity> 
    DeletePost(id: string): Promise<PostEntity>
}