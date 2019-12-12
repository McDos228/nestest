import { PostEntity } from "domain/post/post.entity";

export class CreateCommentDto {
    text: string;
    post: PostEntity
}