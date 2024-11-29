import { create } from 'zustand';
import { ContentIdea, TrendingTopic } from '../types';
import { generateContentIdeas } from '../services/contentGenerator';

interface ContentStore {
  ideas: ContentIdea[];
  topics: TrendingTopic[];
  isGenerating: boolean;
  generateIdea: (keyword: string) => Promise<void>;
  scheduleIdea: (id: string, date?: Date) => void;
  handleTopicSelect: (topic: TrendingTopic) => void;
}

const sampleTrendingTopics: TrendingTopic[] = [
  { id: '1', keyword: '春の新生活', category: '季節', relevance: 0.9 },
  { id: '2', keyword: 'リモートワーク', category: 'ワークスタイル', relevance: 0.8 },
  { id: '3', keyword: '花見', category: 'イベント', relevance: 0.85 },
];

export const useContentStore = create<ContentStore>((set, get) => ({
  ideas: [],
  topics: sampleTrendingTopics,
  isGenerating: false,

  generateIdea: async (keyword: string) => {
    set({ isGenerating: true });
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      const newIdeas = generateContentIdeas(keyword);
      set(state => ({
        ideas: [...newIdeas, ...state.ideas],
        isGenerating: false
      }));
    } catch (error) {
      console.error('Failed to generate ideas:', error);
      set({ isGenerating: false });
    }
  },

  scheduleIdea: (id: string, date = new Date()) => {
    set(state => ({
      ideas: state.ideas.map(idea =>
        idea.id === id ? { ...idea, scheduledDate: date } : idea
      )
    }));
  },

  handleTopicSelect: (topic: TrendingTopic) => {
    get().generateIdea(topic.keyword);
  }
}));