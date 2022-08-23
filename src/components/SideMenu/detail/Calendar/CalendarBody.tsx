import React from 'react';
import { css } from '@emotion/react';
import { DAYS_KO } from 'const/calendar';
import { useRecoilValue } from 'recoil';
import { calendarState, currentDateState } from 'recoil/Calendar';
import { colors } from 'styles/colors';
import { pxToRem } from 'styles/pxToRem';

function CalendarBody() {
  const calendar = useRecoilValue(calendarState);
  const { month: curMonth, date: curDate } = useRecoilValue(currentDateState);

  const getTodayClass = (month: number, date: number) =>
    curMonth === month && curDate === date ? 'today' : '';

  const getAnotherMonthClass = (month: number) =>
    curMonth !== month ? 'anotherMonth' : '';

  const getDayClass = (idx: number) =>
    idx % 7 === 0 ? 'sun' : idx % 7 === 6 ? 'sat' : '';

  return (
    <div css={calendarBodyStyle}>
      <div className="header">
        {DAYS_KO.map((day) => (
          <div className="item" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="body">
        {calendar.map(({ month, date }, idx) => (
          <button
            className={[
              'item',
              getTodayClass(month, date),
              getAnotherMonthClass(month),
              getDayClass(idx),
            ].join(' ')}
            type="button"
            key={`${month}/${date}`}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
}

const calendarBodyStyle = css`
  width: 100%;

  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .body {
    display: grid;
    grid-template-areas: '. . . . . . .';
    gap: ${pxToRem(2)};
    justify-content: space-between;

    button {
      transition: all 0.1s ease-in;
    }

    button:hover {
      background-color: ${colors.gray[400]};
      color: ${colors.black[100]};
    }
  }
  .item {
    font-size: ${pxToRem(12)};
    padding: ${pxToRem(8)};
    border-radius: 50%;
    color: ${colors.black[100]};
  }

  .today {
    background-color: ${colors.black[100]};
    color: white;
  }
  .anotherMonth {
    opacity: 0.2;
  }
  .sun {
    color: ${colors.red[100]};
  }
  .sat {
    color: ${colors.blue[200]};
  }
`;

export default CalendarBody;
