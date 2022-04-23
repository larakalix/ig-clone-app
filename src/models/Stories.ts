import { User } from "./Users";

export interface Story {
    id: string;
    title: string;
    description: string;
    image: string;
    likes: number;
    comments: number;
    user: User;
    createdAt: Date;
}
