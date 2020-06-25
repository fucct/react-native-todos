import React from 'react';
import { RecoilRoot } from 'recoil/dist';
import App from './App';

function Index() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default Index;