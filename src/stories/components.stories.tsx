import React from 'react';
import { storiesOf } from '@storybook/react';
import { StubbedApp } from '../react/test-stubs/Stubbed-App-modal'

import { Card } from '../react/components/Card';
import { Field } from '../react/components/Field';
import { Form } from '../react/components/Form';
import { Modal } from '../react/components/Modal';
import { Button } from '../react/components/Button';

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

storiesOf('Low Level Components/ Button', module)
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
      <StubbedApp>
        <Modal
          type='basic'
          headerText={'I\'m a basic modal'}
          children={'I\'m a basic modal'}
        />
      </StubbedApp>
    )
  })
  .add('modal with content', () => {
    return (
      <StubbedApp>
        <Modal
          type='basic'
          headerText={'I\'m a basic modal'}
        >
          <p>This file holds the text for the various sections of the page. Ideally this would be handled via asynchronous import from an external file, but that's slightly beyond what I'm trying to accomplish for v0.5.0. It probably will be added in at some point though as copy and pasting in the text into the relevant sections is not at all efficient.</p>
          <p>This file holds the text for the various sections of the page. Ideally this would be handled via asynchronous import from an external file, but that's slightly beyond what I'm trying to accomplish for v0.5.0. It probably will be added in at some point though as copy and pasting in the text into the relevant sections is not at all efficient.</p>
        </Modal>
      </StubbedApp>
    )
  });