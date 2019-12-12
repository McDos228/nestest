import { Module } from '@nestjs/common';
import { CommentModule } from './comments/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '../domain/comment/comment.entity';
import { PostModule } from './posts/post.module';
import { PostEntity } from '../domain/post/post.entity';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nesttest',
      entities: [Comment, PostEntity],
      synchronize: true
    }),
    CommentModule,
    PostModule,
  ],
  providers: [
    {
      provide: 'ConfigService',
      useValue: new ConfigService(`${process.env.NODE_ENV || 'dev'}.env`),
    },
  ]
})
export class AppModule {}
