import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../react/components/base/Button/Button';
import { Field } from '../react/components/base/Field/Field';
import { Heading } from '../react/components/base/Heading/Heading';
import { Paragraph } from '../react/components/base/Paragraph/Paragraph';


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

storiesOf('Base/ Button', module)
  .add('basic button', () => {
    return (
      <div style={cssCenter}>
        <Button
          type='std'
          innerText={`Click me`}
          handleClickFn={sayHi}
          />
      </div>
    )
  })
  .add('info button', () => {
    return (
      <div style={cssCenter}>
        <Button
          type='info'
          innerText={`Info`}
          handleClickFn={sayHi}
          />
      </div>
    )
});