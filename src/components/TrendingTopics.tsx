import React from 'react';
import { TrendingUp } from 'lucide-react';
import { TrendingTopic } from '../types';

interface TrendingTopicsProps {
  topics: TrendingTopic[];
  onTopicSelect: (topic: TrendingTopic) => void;
}

export function TrendingTopics({ topics, onTopicSelect }: TrendingTopicsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">トレンドキーワード</h2>
      </div>
      <div className="space-y-3">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => onTopicSelect(topic)}
            className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">{topic.keyword}</span>
              <span className="text-sm text-gray-500">{topic.category}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}