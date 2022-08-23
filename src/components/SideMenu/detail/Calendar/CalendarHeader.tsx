import { css } from '@emotion/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentDateState } from 'recoil/Calendar';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import A11yHidden from 'components/common/A11yHidden/A11yHidden';

function CalendarHeader() {
  const { year, month } = useRecoilValue(currentDateState);

  return (
    <div css={calendarHeaderStyle}>
      <time dateTime={`${year}-${month}`}>{`${year}년 ${month}월`}</time>

      <div className="buttonWrapper">
        <button title="이전" type="button">
          <A11yHidden>이전</A11yHidden>
          <FiChevronLeft size={20} />
        </button>

        <button title="다음" type="button">
          <A11yHidden>다음</A11yHidden>
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

const calendarHeaderStyle = css`
  display: flex;
  justify-content: space-between;

  time {
    font-weight: 700;
  }
`;

export default CalendarHeader;
