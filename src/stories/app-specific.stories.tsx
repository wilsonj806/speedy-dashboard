import React from 'react';
import { storiesOf } from '@storybook/react';

import { AppFragAdd } from '../react/components/app-specific/AddModal/AppFragAdd';
import { AppFragInfo } from '../react/components/app-specific/InfoModal/AppFragInfo';
import { AppFragTodo } from '../react/components/app-specific/Todo/AppFragTodo';

import { Info, InfoModal, AddCard, AddModal, CatCard, TodoCard, LoremCard, WeatherCard } from '../react/components/component.lib';

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

storiesOf('App Specific/ Weather Card', module)
  .add('Weather Card', () => {
    return (
      <div style={cssCenter}>
        <WeatherCard/>
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

storiesOf('App Specific/ To Do Card', module)
  .add('To Do Card', () => {
    return (
      <TodoCard
        handleChangeFn={sayHi}
        handleSubmitFn={sayHi}
      />
    )
  })
  .add('App fragment', () => {
    return (
      <div style={cssCenter}>
        <AppFragTodo/>
      </div>
    )
  })

storiesOf('App Specific/ Add More Cards Modal', module)
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

storiesOf('App Specific/ Info Modal', module)
  .add('Basic Info Dialog', () => {
    return (
      <InfoModal

      />
    )
  })
  .add('App fragment with Info', () => {
    return (
      <AppFragInfo

      />
    )
  });

