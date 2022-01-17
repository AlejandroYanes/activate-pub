import { CommentModel } from './comment';

export interface EventModel {
  id: string;
  name: string;
  date: string;
  image: string;
  address: string;
  description?: string;
  comments?: CommentModel[];
  author: {
    id: string;
    name: string;
    userName?: string;
    avatar: string;
  };
  friends?: {
    id: string;
    avatar: string;
  }[];
  followersCount?: number;
  going: boolean;
}

export interface SimpleEventDTO {
  category: string;
  name: string;
  date: Date;
  endDate?: Date;
  isRanged?: boolean;
  address: string;
  isOnline?: boolean;
}
