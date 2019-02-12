import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoremPartial } from '../react/components/app-specific/LoremPartial';
import { CatPartial } from '../react/components/app-specific/CatPartial';


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
  .add('Lorem Card', () => {
    return (
      <LoremPartial/>
    )
  });

storiesOf('App Specific/ Cat Card', module)
  .add('Cat Card', () => {
    return (
      <CatPartial/>
    )
  });
