import React, { Component, ReactElement } from 'react';

import { TodoCard } from './TodoCard';

import { Button } from '../../base/Button/Button';
import { Paragraph } from '../../base/Paragraph/Paragraph';

import { List } from '../../presentational/List/List';
import { ListItem } from '../../presentational/List/ListItem/ListItem';

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};

const initialState: Local.BasicObj = {
  listEle: [],
  ['task']     : '',
  ['priority'] : ''
}

type State = Readonly<typeof initialState>

export class AppFragTodo extends Component<any, State> {
  readonly state: State = initialState;

  handleSubmit = (val: any): any => {
    // NOTE or replace with object.entries so its not tied too much to implementation/ so its less brittle
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
        style={flex}
      >
        <div className={`priority priority--${priority}`}></div>
        <span>{priority}</span>
      </div>
    );
    const deleteBtn = (
      <Button
        type='danger'
        innerText='Delete'
      />
    )
    const prgh = (
    <Paragraph
      type='todo'
    >{ task }
    </Paragraph>
    );
    const arr = [priorityDiv, prgh, deleteBtn];
    this.setState((prevState: State) => {
      const { listEle } = prevState;
      listEle.push(arr);
      return (
        {
          'listEle': listEle,
        }
      )
    });
  }

  handleEntryDelete = () => {
    console.log('hi');
  }

  render = (): ReactElement<any, any> => {
    const { listEle } = this.state
    return (
      <div>
        <TodoCard
          handleSubmitFn={ this.handleSubmit }
        >
          { listEle ? listEle : null }
        </TodoCard>
      </div>
    )
  }
}
