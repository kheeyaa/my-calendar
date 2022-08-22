import { Global } from '@emotion/react';
import React from 'react';
import { reset } from 'styles/reset';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Global styles={reset} />
        hello
      </RecoilRoot>
    </div>
  );
}

export default App;
