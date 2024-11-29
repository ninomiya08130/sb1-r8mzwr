import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { ContentIdea } from '../types';
import { formatScheduleDate } from '../utils/dateUtils';

interface CalendarProps {
  scheduledIdeas: ContentIdea[];
}

export function Calendar({ scheduledIdeas }: CalendarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">投稿スケジュール</h2>
      </div>
      <div className="space-y-4">
        {scheduledIdeas.map((idea) => (
          <div key={idea.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50">
            <div className="min-w-24">
              <span className="text-sm font-medium text-gray-600">
                {idea.scheduledDate && formatScheduleDate(idea.scheduledDate)}
              </span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">{idea.title}</h4>
              <span className="text-sm text-gray-500">{idea.platform}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}