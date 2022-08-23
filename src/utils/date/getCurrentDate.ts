import dayjs from 'dayjs';
import { getDayKo } from 'utils/date/getDayKo';

export const getCurrentDate = () => {
  const curDayjs = dayjs();
  const year = +curDayjs.format('YYYY');
  const month = +curDayjs.format('M');
  const date = +curDayjs.format('D');
  const day = getDayKo(+curDayjs.format('d'));

  return {
    curDayjs,
    year,
    month,
    date,
    day,
  };
};
