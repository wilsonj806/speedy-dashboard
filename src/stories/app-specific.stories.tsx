import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoremPartial } from '../react/components/app-specific/LoremPartial';
import { CatPartial } from '../react/components/app-specific/CatPartial';
import { AddMorePartial } from '../react/components/app-specific/AddMorePartial';


import '../react/stylesheets/index.css';

// NOTE Dummy Functions

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};
const cssCenter = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgb(255, 185, 55)'
}

storiesOf('App Specific/ Lorem Card', module)
  .add('Lorem Card', () => {
    return (
      <div style={cssCenter}>
        <LoremPartial/>
      </div>
    )
  });

storiesOf('App Specific/ Cat Card', module)
  .add('Cat Card', () => {
    return (
      <div style={cssCenter}>
        <CatPartial/>
      </div>
    )
  });

  storiesOf('App Specific/ Add More Cards Dialog', module)
  .add('Basic Add More Dialog', () => {
    return (
      <AddMorePartial/>
    )
  });
