import {Injectable, Inject} from '@nestjs/common';
import { Comment } from '../../domain/comment/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IComment } from '../../domain/comment/IComment';

@Injectable()
export class CommentsService {
	constructor(
        @InjectRepository(Comment) private readonly commentRepository: Repository<Comment>
    ) {}

    async getAllComments (): Promise<Comment[]> {
        try {
            return this.commentRepository.find();    
        } catch (error) {
            return error
        }
    }

    async createComment (data: IComment): Promise<Comment> {
        try {
            return await this.commentRepository.save({
                text: data.text,
                post: data.post
            })    
        } catch (error) {
            return error
        }
    }

    async getCommentById (id: string): Promise<Comment> {
        try {
            return await this.commentRepository.findOne(id);   
        } catch (error) {
            return error
        }
    }

    async updateComment(data: IComment): Promise<Comment> {
        try {
            const comment = await this.commentRepository.findOne(data.id);
            comment.text = data.text;
            return await this.commentRepository.save(comment);    
        } catch (error) {
            return error
        }
    }

    async deleteComment(id: string): Promise<Comment> {
        try {
            const comment = await this.commentRepository.findOne(id);
            return await this.commentRepository.remove(comment);    
        } catch (error) {
            return error
        }
    }

}