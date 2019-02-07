import React from 'react';
import { storiesOf } from '@storybook/react';
import { StubbedApp } from '../react/test-stubs/Stubbed-App-modal'
import { MultipleSupport } from '../react/test-stubs/MultiModal'

import { Card } from '../react/components/Card';
import { Field } from '../react/components/Field';
import { Form } from '../react/components/Form';
import { Modal } from '../react/components/Modal';
import { Button } from '../react/components/Button';

import '../react/stylesheets/index.css';

// NOTE Dummy Functions

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};

storiesOf('Component Groups/ Modals', module)
  .add('multiple modals', () => {
    return (
      <MultipleSupport/>
    )
  });