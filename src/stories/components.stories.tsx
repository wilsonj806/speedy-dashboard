import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from '../react/components/Card';
import { Field } from '../react/components/Field';
import { Form } from '../react/components/Form';
import { Modal } from '../react/components/Modal';
import { Button } from '../react/components/Button';

// NOTE Dummy Functions

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  event.preventDefault();
  console.log('hi')
};

storiesOf('Low Level Components/ Card', module)
  .add('basic card', () => {
    return (
      <Card>
        <p>hi</p>
      </Card>
    )
});

storiesOf('Low Level Components/ Field', module)
  .add('Labeless input', () => {
    return (
      <Field
        type='number'
        name='example button'
        noLabel={true}
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
  })
  .add('Field with state', () => {
    return (
      <Field
        type='text'
        name='exmaple'
      />
    )
  })
  .add('Field with a different onchange handler', () => {
    return (
      <Field
        type='text'
        name='exmaple'
        handleChangeFn={sayHi}
      />
    )
  });

storiesOf('Low Level Components/ Form', module)
.add('New form', () => {
    return (
      <Form
        handleSubmitFn={sayHi}
        passingTemplate={true}
      >
        {[
          {
            type:'text',
            name: 'task',
            value:'',
          },
          {
            type:'text',
            name: 'priority',
            value:''
          },
        ]}
      </Form>
    )
    });

storiesOf('Low Level Components/ Modal', module)
  .add('a basic modal', () => {
    return (
      <Modal/>
    )
  })