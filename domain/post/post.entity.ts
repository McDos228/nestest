import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Comment } from '../comment/comment.entity';
import { IPost } from './IPost';

@Entity('posts')
export class PostEntity implements IPost {

  @PrimaryGeneratedColumn()
  id: String;

  @Column()
  title: String;

  @Column()
  text: String;

  @CreateDateColumn({type:'date'})
  date: Date;

  @OneToMany(type => Comment, comment => comment.post )
  comments: Comment[];
}