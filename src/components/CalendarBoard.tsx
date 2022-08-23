import { css } from '@emotion/react';
import React from 'react';
import { colors } from 'styles/colors';
import { pxToRem } from 'styles/pxToRem';
import Header from './Header/Header';
import Main from './Main/Main';
import SideMenu from './SideMenu/SideMenu';

function CalendarBoard() {
  return (
    <div css={calendarBoardStyle}>
      <SideMenu />
      <Header />
      <Main />
    </div>
  );
}

const calendarBoardStyle = css`
  display: grid;
  grid-template-columns: ${pxToRem(270)} 1fr;
  grid-template-rows: ${pxToRem(70)} 1fr;
  min-width: 100vw;
  min-height: 100vh;
  grid-template-areas: ${`
    "article header"
    "article main"
  `};

  & > article {
    grid-area: article;
    border-right: 1px solid ${colors.gray[200]};
  }
  & > header {
    grid-area: header;
  }
  & > main {
    grid-area: main;
  }
`;

export default CalendarBoard;
