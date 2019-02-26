import React, { Component, ReactElement } from 'react';

import { TodoCard } from './TodoCard';

import { Button } from '../../base/Button/Button';

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
      alignItems: 'center'
    }
    const priorityDiv = (
      <div
        style={flex}
      >
        <div className={`priority priority--${priority}`}></div> {priority}
      </div>
    );
    const deleteBtn = (
      <Button
        type='danger'
        innerText='&times; Delete'
      />
    )
    const arr = [priorityDiv, task, deleteBtn];
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
    const toRender = null;
    return (
      <div>
        <TodoCard
          handleSubmitFn={ this.handleSubmit }
        >
          {toRender}
        </TodoCard>
      </div>
    )
  }
}
