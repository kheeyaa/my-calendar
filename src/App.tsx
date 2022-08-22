import { Global } from '@emotion/react';
import React from 'react';
import { reset } from 'styles/reset';
import { RecoilRoot } from 'recoil';
import CalendarBoard from 'components/CalendarBoard';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Global styles={reset} />
        <CalendarBoard />
      </RecoilRoot>
    </div>
  );
}

export default App;
