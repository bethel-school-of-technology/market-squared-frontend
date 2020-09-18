import { User } from './user';

export class Post {
  post_id: number;
  user_id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  user: User;
}