import { atom } from 'recoil';
import { CalendarItemType, CalendarType, CurrentDateType } from 'type/calendar';
import { getCalendar } from 'utils/date/getCalendar';
import { getCurrentDate } from 'utils/date/getCurrentDate';

const defaultCurrentDate = getCurrentDate();
export const currentDateState = atom<CurrentDateType>({
  key: 'currentDateState',
  default: defaultCurrentDate,
});

export const calendarTypeState = atom<CalendarType>({
  key: 'calendarTypeState',
  default: '월',
});

const defaultCalendar = getCalendar(defaultCurrentDate.curDayjs);
export const calendarState = atom<CalendarItemType[]>({
  key: 'calendarState',
  default: defaultCalendar,
});
