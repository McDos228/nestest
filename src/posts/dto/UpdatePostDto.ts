export class UpdatePostDto {
    id: string;
    title: string;
    text: string;
    date: Date;
    comments: Comment[]
  }