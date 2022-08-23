export type dayType = '일' | '월' | '화' | '수' | '목' | '금' | '토';
export type CalendarType = '월' | '주' | '일';

export type CurrentDateType = {
  curDayjs: any;
  year: number;
  month: number;
  date: number;
  day: dayType;
};

export type CalendarItemType = {
  month: number;
  date: number;
};
