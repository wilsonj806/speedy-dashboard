import React, { Component, ReactElement } from 'react';

import { Field } from '../../stateful/Forms/Field/Field';
import { Heading } from '../../base/Heading/Heading';
import { Button } from '../../base/Button/Button';
import { Paragraph } from '../../base/Paragraph/Paragraph';

import { Card } from '../../presentational/Card/Card';
import { List } from '../../presentational/List/List';

import { Form } from '../../stateful/Forms/Form';

import '../Comp-modifiers.css';

const sayHi = () => console.warn('Expecting a function');

class TodoCard extends Component<Local.TodoCardProps, any> {

  render = (): ReactElement<any, any> => {
    const { children, handleChangeFn, handleSubmitFn } = this.props;
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
            <Form
              id='todo-form'
              handleSubmitFn={handleSubmitFn ? handleSubmitFn : sayHi}
            >
            </Form>

            { length !== 0 ? (
              <List
              type='todo'
              listType='ul'
              >
                {toRender}
              </List>
            ) : null }
            </>
          )
        }}
      </Card>
    )
  }
}

const renderTemplate = (val: Local.BasicObj, index: number, handleClick: Local.VoidFn): Array<ReactElement<any>> => {
  const { task, priority } = val;
  const flex = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginLeft: '0.5rem',
    width: '5rem'
  }
  const priorityDiv = (
    <div
      key={0}
      style={flex}
    >
      <div className={`priority priority--${priority}`}></div>
      <span>{priority}</span>
    </div>
  );
  const deleteBtn = (
    <Button
      key={1}
      type='danger'
      target={index}
      innerText='Delete'
      handleClickFn={handleClick}
    />
  )
  const prgh = (
    <Paragraph
      key={2}
      type='todo'
    >{ task }
    </Paragraph>
  );
  return [priorityDiv, prgh, deleteBtn];
}

export { TodoCard, renderTemplate}