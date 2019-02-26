import React, {ReactNode} from 'react';
import { storiesOf } from '@storybook/react';

import { Field } from '../react/components/stateful/Forms/Field/Field';
import { Heading } from '../react/components/base/Heading/Heading';
import { Paragraph } from '../react/components/base/Paragraph/Paragraph';
import { Button } from '../react/components/base/Button/Button';
import { Card } from '../react/components/presentational/Card/Card';
import { Dash } from '../react/components/presentational/Dash/Dash';
import { FormFancy } from '../react/components/stateful/Forms/FormFancy';
import { Form } from '../react/components/stateful/Forms/Form';

const cssCenter = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgb(255, 185, 55)'
}

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};

storiesOf('Stateful/ Form', module)
  .add('A basic form', () => {
    return (
      <div style={cssCenter}>
        <Form
          handleSubmitFn={sayHi}
        >
            <Field
              type='radio'
              name='priority'
              value='high'
              />
            <Field
              type='radio'
              name='priority'
              value='medium'
              />
            <Field
              type='radio'
              name='priority'
              value='low'
              />
        </Form>
      </div>
    )
  })
  .add('A form with a fieldset as a child', () => {
    return (
      <div style={cssCenter}>
        <Form
          handleSubmitFn={sayHi}
          handleChangeFn={sayHi}
        >
          <fieldset>
            <legend>Task Priority</legend>
            <Field
              type='radio'
              name='priority'
              value='high'
              />
            <Field
              type='radio'
              name='priority'
              value='medium'
              />
            <Field
              type='radio'
              name='priority'
              value='low'
              />
          </fieldset>
        </Form>
      </div>
    )
  });