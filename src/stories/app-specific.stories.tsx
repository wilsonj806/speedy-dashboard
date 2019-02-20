import React from 'react';
import { storiesOf } from '@storybook/react';

import { Info } from '../react/components/app-specific/Info';
import { LoremCard } from '../react/components/app-specific/LoremCard';
import { CatCard } from '../react/components/app-specific/CatCard';
import { AddCard } from '../react/components/app-specific/AddCard';
import { AddModal } from '../react/components/app-specific/AddModal/AddModal';
import { AppFragAdd } from '../react/components/app-specific/AddModal/AppFragAdd';

import { App } from '../react/App';

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

storiesOf('App Specific/ Help Button', module)
  .add('Help Button', () => {
    return (
      <div style={cssCenter}>
        <Info
          handleDisplayFn={sayHi}
        />
      </div>
    )
  });

storiesOf('App Specific/ Add Cards', module)
  .add('Add Cards', () => {
    return (
      <div style={cssCenter}>
        <AddCard
          handleAddFn={sayHi}
        />
      </div>
    )
  });

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