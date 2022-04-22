export interface User {
    id: string;
    isVerified: boolean;
    name: string;
    posts: number;
    followers: number;
    followed: number;
    thumbnail: string;
    postItems: Post[];
}

export interface Post {
    id: string;
    thumbnail: string;
}

export interface Comments {
    id: string;
    user: User;
    message: string;
}
