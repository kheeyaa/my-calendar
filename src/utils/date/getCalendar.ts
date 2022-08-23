import { CALENDAR_DAY_CNT } from 'const/calendar';
import { CalendarItemType, CurrentDateType } from 'type/calendar';

export const getCalendar = (curDayjs: any): CalendarItemType[] => {
  const beforeDayjs = curDayjs.subtract(1, 'month');
  const afterDayjs = curDayjs.add(1, 'month');

  const beforeEnd = getEndInfo(beforeDayjs);
  const curStart = getStartInfo(curDayjs);
  const curEnd = getEndInfo(curDayjs);

  const calendarArray: CalendarItemType[] = Array(CALENDAR_DAY_CNT)
    .fill(null)
    .map((_, i) => {
      if (i < curStart.day) {
        return {
          month: beforeEnd.month,
          date: beforeEnd.date - i,
        };
      } else if (i < curEnd.date + curStart.day) {
        return {
          month: curStart.month,
          date: i,
        };
      } else {
        return {
          month: +afterDayjs.format('M'),
          date: i - curEnd.date,
        };
      }
    });

  return calendarArray;
};

const getStartInfo = (curDayjs: any) => {
  return {
    month: +curDayjs.startOf('M').format('M'),
    date: +curDayjs.startOf('M').format('D'),
    day: +curDayjs.startOf('M').format('d'),
  };
};

const getEndInfo = (curDayjs: any) => {
  return {
    month: +curDayjs.endOf('M').format('M'),
    date: +curDayjs.endOf('M').format('D'),
    day: +curDayjs.endOf('M').format('d'),
  };
};
