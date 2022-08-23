import React from 'react';
import { css } from '@emotion/react';

function Logo() {
  return (
    <div css={logoStyle}>
      <a href="/">My Calendar</a>
    </div>
  );
}

const logoStyle = css`
  font-weight: 700;
`;

export default Logo;
