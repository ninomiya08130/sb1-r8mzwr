import React from 'react';
import { Calendar, Share2 } from 'lucide-react';
import { ContentIdea } from '../types';
import { formatScheduleDate } from '../utils/dateUtils';

interface IdeaCardProps {
  idea: ContentIdea;
  onSchedule: (id: string) => void;
}

export function IdeaCard({ idea, onSchedule }: IdeaCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{idea.title}</h3>
        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
          {idea.platform}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{idea.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">#{idea.category}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onSchedule(idea.id)}
            className="p-2 rounded-full hover:bg-gray-100"
            title="スケジュール"
          >
            <Calendar className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            title="共有"
          >
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      {idea.scheduledDate && (
        <div className="mt-4 text-sm text-gray-500">
          予定日: {formatScheduleDate(idea.scheduledDate)}
        </div>
      )}
    </div>
  );
}