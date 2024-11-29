import React from 'react';
import { IdeaGenerator } from '../components/IdeaGenerator';
import { IdeaCard } from '../components/IdeaCard';
import { TrendingTopics } from '../components/TrendingTopics';
import { Calendar } from '../components/Calendar';
import { useContentStore } from '../store/contentStore';

export function HomePage() {
  const { ideas, topics, isGenerating, generateIdea, scheduleIdea, handleTopicSelect } = useContentStore();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <IdeaGenerator
          onGenerate={generateIdea}
          isGenerating={isGenerating}
        />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ideas.map((idea) => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              onSchedule={scheduleIdea}
            />
          ))}
          {ideas.length === 0 && !isGenerating && (
            <div className="col-span-2 text-center py-12 text-gray-500">
              キーワードを入力するか、トレンドトピックを選択してアイデアを生成してください
            </div>
          )}
        </section>
      </div>
      
      <div className="space-y-6">
        <TrendingTopics
          topics={topics}
          onTopicSelect={handleTopicSelect}
        />
        <Calendar
          scheduledIdeas={ideas.filter((idea) => idea.scheduledDate)}
        />
      </div>
    </div>
  );
}