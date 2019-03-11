import React, { Component, ReactElement } from 'react';

import { Field } from '../../stateful/Forms/Field/Field';
import { Heading } from '../../base/Heading/Heading';
import { Button } from '../../base/Button/Button';

import { Card } from '../../presentational/Card/Card';
import { List } from '../../presentational/List/List';

import { Form } from '../../stateful/Forms/Form';

import './Todo.css';


class TodoCard extends Component<Local.TodoCardProps, any> {

  render = (): ReactElement<any, any> => {
    const { children, handleSubmitFn } = this.props;
    const length = Array.isArray(children) ? children.length : null;
    const toRender = children ? children : 'Add some tasks!';
    return (
      <Card
        id='todo'
        type='todo'
      >
        {{
          header: ([
            <Heading
              key={0}
              type='md'
              headingLvl={3}
              >
              To Do Card
            </Heading>,
            <Button
              key={1}
              type='close'
              target='todo'
              innerText='&times;'
            />
          ]),
          content: (
            <>
            {/* <Heading
              key={0}
              type='sm'
              headingLvl={4}
              >
              Form
            </Heading> */}
            <Form
              id='todo-form'
              handleSubmitFn={handleSubmitFn}
            >
            </Form>

            { length !== 0 ? (
              <List
                type='todo'
                listType='ul'
              >
                {toRender}
              </List>
            ) : <div style={{display: 'none'}}></div> }
            </>
          )
        }}
      </Card>
    )
  }
}

export { TodoCard }