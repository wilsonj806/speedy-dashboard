import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from '../react/components/Card';
import { Form } from '../react/components/Form';

storiesOf('Low Level Component/ Card', module)
  .add('basic card', () => {
    return (
      <Card>
        <p>hi</p>
      </Card>
)});

storiesOf('Low Level Component/ Form', module)
  .add('Form ele ripped from CRA example', () => {
    return (
      <Form handleSubmit={function hi(){console.log('hi')}}/>
)});