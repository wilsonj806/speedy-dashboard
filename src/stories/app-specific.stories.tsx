import React from 'react';
import { storiesOf } from '@storybook/react';

import { LoremCard } from '../react/components/app-specific/LoremCard';
import { CatCard } from '../react/components/app-specific/CatCard';
import { AddModal } from '../react/components/app-specific/AddModal/AddModal';
import { AppFragAdd } from '../react/components/app-specific/AddModal/AppFragAdd';

import { App } from '../react/App';

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
      <AddModal
        renderCards={{
          basic1: false,
          basic2: false
        }}
        handleCardFn={null}
      />
    )
  })
  .add('App fragment with Add More', () => {
    return (
      <AppFragAdd

      />
    )
  });

storiesOf('App Specific/ App', module)
  .add('App', () => {
    return (
      <App
      />
    )
  })