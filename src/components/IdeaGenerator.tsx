import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { ContentIdea } from '../types';

interface IdeaGeneratorProps {
  onGenerate: (keyword: string) => void;
  isGenerating: boolean;
}

export function IdeaGenerator({ onGenerate, isGenerating }: IdeaGeneratorProps) {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim() && !isGenerating) {
      onGenerate(keyword.trim());
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">新しいコンテンツアイデアを生成</h2>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="キーワードを入力してください"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              disabled={isGenerating}
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <button
          type="submit"
          disabled={!keyword.trim() || isGenerating}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              生成中...
            </>
          ) : (
            '生成する'
          )}
        </button>
      </form>
    </div>
  );
}