import React, { Component, ReactElement } from 'react';

import { Field } from '../../stateful/Forms/Field/Field';
import { Heading } from '../../base/Heading/Heading';
import { Button } from '../../base/Button/Button';

import { Card } from '../../presentational/Card/Card';
import { Form } from '../../stateful/Forms/Form';

import '../Comp-modifiers.css';

const sayHi = () => console.log('hi');

export class ToDoCard extends Component<Local.TodoCardProps, any> {

  render = (): ReactElement<any, any> => {
    return (
      <Card
        id='todo'
        type='todo'
      >
        {{
          header: (
            <Heading
              headingLvl={3}
            >
              To Do Card
            </Heading>
          ),
          content: (
            <Form
              handleSubmitFn={sayHi}
            >
              <fieldset>
                <legend>Task Priority</legend>
                <Field
                  type='radio'
                  name='priority'
                  value='high'
                  handleChangeFn={sayHi}
                  />
                <Field
                  type='radio'
                  name='priority'
                  value='medium'
                  handleChangeFn={sayHi}
                  />
                <Field
                  type='radio'
                  name='priority'
                  value='low'
                  handleChangeFn={sayHi}
                  />
              </fieldset>
              <Field
                type='text'
                name='task'
                handleChangeFn={sayHi}
              />
            </Form>
          )
        }}
      </Card>
    )
  }
}