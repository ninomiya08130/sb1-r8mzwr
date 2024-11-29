import { format, isToday, isTomorrow, isThisWeek } from 'date-fns';
import { ja } from 'date-fns/locale';

export const formatScheduleDate = (date: Date): string => {
  if (isToday(date)) {
    return '今日';
  }
  if (isTomorrow(date)) {
    return '明日';
  }
  if (isThisWeek(date)) {
    return format(date, 'EEEE', { locale: ja });
  }
  return format(date, 'M月d日', { locale: ja });
};