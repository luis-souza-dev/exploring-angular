export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: PostTags[];
    reactions: number;
}

export type PostTags = 'mystery' | 'american' | 'classic' | 'english' | 'history' | 'love' | 'crime' | 'french' | 'fiction' | 'magical';