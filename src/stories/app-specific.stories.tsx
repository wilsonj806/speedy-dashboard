import React from 'react';
import { storiesOf } from '@storybook/react';

import { ModalController } from '../react/components/presentational/ModalController/ModalController';

import { LoremCard } from '../react/components/app-specific/LoremCard';
import { CatCard } from '../react/components/app-specific/CatCard';
import { AddMore } from '../react/components/app-specific/AddMore/AddMore';
import { MinIntAdd } from '../react/components/app-specific/AddMore/MinIntAdd';


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
        <LoremCard/>
      </div>
    )
  });

storiesOf('App Specific/ Cat Card', module)
  .add('Cat Card', () => {
    return (
      <div style={cssCenter}>
        <CatCard/>
      </div>
    )
  });

storiesOf('App Specific/ Add More Cards Dialog', module)
  .add('Basic Add More Dialog', () => {
    return (
      <AddMore
        renderCards={{
          basic1: false,
          basic2: false
        }}
        handleCardFn={null}
      />
    )
  })
  .add('Partial Integration', () => {
    return (
      <MinIntAdd

      />
    )
  });
