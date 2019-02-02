import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from '../react/components/Card';
import { Field } from '../react/components/Field';
import { Form } from '../react/components/Form';

storiesOf('Low Level Component/ Card', module)
  .add('basic card', () => {
    return (
      <Card>
        <p>hi</p>
      </Card>
)});

storiesOf('Low Level Component/ Field', module)
  .add('Labeless input', () => {
    return (
      <Field
        type='number'
        name='example button'
        generateLabel={false}
      />
    )
  })
  .add('Basic text field', () => {
    return (
      <Field
        type='text'
        name='exmaple'
      />
    )
});

storiesOf('Low Level Component/ Form', module)
  .add('Form ele ripped from CRA example', () => {
    return (
      <Form handleSubmit={function hi(){console.log('hi')}}/>
)});