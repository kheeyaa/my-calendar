import React from 'react';
import { css } from '@emotion/react';
import { pxToRem } from 'styles/pxToRem';
import Logo from './detail/Logo';
import Calendar from './detail/Calendar/Calendar';

function SideMenu() {
  return (
    <article css={sideMenuStyle}>
      <Logo />
      <Calendar />
    </article>
  );
}

const sideMenuStyle = css`
  padding: ${pxToRem(24)};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export default SideMenu;
