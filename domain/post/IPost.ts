import { IComment } from "domain/comment/IComment";

export interface IPost {
    id?: String;
    title?: String;
    date?: Date;
    text?: String;
    comments: IComment[]
}
