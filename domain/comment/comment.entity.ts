import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { IComment } from './IComment';
import { PostEntity } from '../post/post.entity';

@Entity('comments')
export class Comment implements IComment {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @ManyToOne(type => PostEntity, post => post.comments)
  post: PostEntity;

}