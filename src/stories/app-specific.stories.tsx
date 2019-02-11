import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoremStub } from '../react/components/app-specific/LoremStub';


import '../react/stylesheets/index.css';

// NOTE Dummy Functions

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};
const cssCenter = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

storiesOf('App Specific/ Lorem Card', module)
  .add('Lorem stubbed integration', () => {
    return (
      <LoremStub/>
    )
  });
