import React, { useState } from 'react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import { ja } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { useContentStore } from '../store/contentStore';
import { ContentIdea } from '../types';

export function SchedulePage() {
  const { ideas } = useContentStore();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const scheduledIdeas = ideas.filter(idea => idea.scheduledDate);

  const startOfCurrentWeek = startOfWeek(selectedDate, { locale: ja });
  const weekDays = [...Array(7)].map((_, i) => addDays(startOfCurrentWeek, i));

  const getIdeasForDate = (date: Date): ContentIdea[] => {
    return scheduledIdeas.filter(idea => 
      idea.scheduledDate && isSameDay(new Date(idea.scheduledDate), date)
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">投稿スケジュール管理</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSelectedDate(addDays(selectedDate, -7))}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-medium">
              {format(selectedDate, 'yyyy年M月', { locale: ja })}
            </span>
            <button
              onClick={() => setSelectedDate(addDays(selectedDate, 7))}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {weekDays.map((date) => (
            <div
              key={date.toString()}
              className="border rounded-lg p-4"
            >
              <div className="text-sm font-medium text-gray-500 mb-2">
                {format(date, 'E', { locale: ja })}
              </div>
              <div className="text-lg font-semibold mb-4">
                {format(date, 'd')}
              </div>
              <div className="space-y-2">
                {getIdeasForDate(date).map((idea) => (
                  <div
                    key={idea.id}
                    className="p-2 bg-blue-50 rounded-md text-sm"
                  >
                    <div className="font-medium text-gray-800">{idea.title}</div>
                    <div className="flex items-center text-gray-500 mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{idea.scheduledDate && format(new Date(idea.scheduledDate), 'HH:mm')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}