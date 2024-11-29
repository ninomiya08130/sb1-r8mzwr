export interface ContentIdea {
  id: string;
  title: string;
  description: string;
  platform: 'twitter' | 'instagram' | 'facebook' | 'linkedin';
  category: string;
  scheduledDate?: Date;
}

export interface TrendingTopic {
  id: string;
  keyword: string;
  category: string;
  relevance: number;
}