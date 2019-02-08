import React from 'react';
import { storiesOf } from '@storybook/react';
import { StubbedApp } from '../react/test-stubs/SingleModalDisplay'
import { MultipleSupport } from '../react/test-stubs/MultiModalDisplay'

import { Form } from '../react/components/Form';
import { Modal } from '../react/components/Modal';
import { Dash } from '../react/components/Dash';


import '../react/stylesheets/index.css';

// NOTE Dummy Functions

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};

storiesOf('Component Groups/ Group of Modals', module)
  .add('multiple modals', () => {
    return (
      <MultipleSupport/>
    )
  });

  storiesOf('Component Groups/ Dash', module)
  .add('basic dash with default cards', () => {
    return (
      <Dash>
        {null}
      </Dash>
    )
  });