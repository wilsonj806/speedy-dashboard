import React, { Component, ReactElement } from 'react';

import { Field } from '../../stateful/Forms/Field/Field';
import { Heading } from '../../base/Heading/Heading';
import { Button } from '../../base/Button/Button';

import { Card } from '../../presentational/Card/Card';
import { List } from '../../presentational/List/List';

import { Form } from '../../stateful/Forms/Form';

import '../Comp-modifiers.css';

const sayHi = () => console.warn('Expecting a function');

export class TodoCard extends Component<Local.TodoCardProps, any> {

  render = (): ReactElement<any, any> => {
    const { children, handleChangeFn, handleSubmitFn } = this.props;
    const toRender = children ? children : 'Add some tasks!';
    return (
      <Card
        id='todo'
        type='todo'
      >
        {{
          header: (
            <Heading
              type='md'
              headingLvl={3}
            >
              To Do Card
            </Heading>
          ),
          content: (
            <>
            <Form
              handleSubmitFn={handleSubmitFn ? handleSubmitFn : sayHi}
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
              <Field
                type='text'
                name='task'
              />
            </Form>

            <List
              listType='ul'
            >
              {toRender}
            </List>
            </>
          )
        }}
      </Card>
    )
  }
}