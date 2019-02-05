import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from '../react/components/Card';
import { Field } from '../react/components/Field';
import { Form } from '../react/components/Form';
import { Modal } from '../react/components/Modal';
import { Button } from '../react/components/Button';

// NOTE Dummy Functions

const sayHi = () => console.log('hi');

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
  .add('Form ele ripped from CRA example', () => {
    return (
      <Form
        handleSubmitFn={sayHi}
        passingTemplate={false}
      />
    )
  })
.add('Same CRA form but with children', () => {
  return (
    <Form
      handleSubmitFn={sayHi}
      passingTemplate={false}
    >
      <Field
        type='text'
        name='name'
      />
      <Field
        type='text'
        name='job'
      />
      <Button
        isHTMLInputSubmit={true}
        innerText={null}
        className='btn--submit'
        handleClickFn={sayHi}>
      </Button>
    </Form>
  )
  })
.add('New form', () => {
    return (
      <Form
        handleSubmitFn={sayHi}
        passingTemplate={true}
      >
        {[
          {
            type:'text',
            name: 'dab',
            value:''
          },
          {
            type:'text',
            name: 'next-field',
            value:''
          },
          <Button
            isHTMLInputSubmit={true}
            innerText={null}
            className='btn--submit'
            handleClickFn={sayHi}>
          </Button>
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