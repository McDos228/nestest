import { PostEntity } from "domain/post/post.entity";

export interface IComment {
    id?: string;
    text?: string;
    post?: PostEntity;
}
