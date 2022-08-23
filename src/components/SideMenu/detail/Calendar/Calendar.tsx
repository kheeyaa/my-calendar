import { css } from '@emotion/react';
import A11yHidden from 'components/common/A11yHidden/A11yHidden';
import React from 'react';
import { pxToRem } from 'styles/pxToRem';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

function Calendar() {
  return (
    <article css={calendarStyle}>
      <A11yHidden as="h2">달력</A11yHidden>
      <CalendarHeader />
      <CalendarBody />
    </article>
  );
}

const calendarStyle = css`
  width: 100%;
  height: ${pxToRem(240)};
  margin-top: ${pxToRem(20)};

  font-size: ${pxToRem(14)};
`;

export default Calendar;
