import React, { Component, ReactElement } from 'react';

import { TodoCard, renderTemplate } from './TodoCard';

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

  handleSubmit = (state: any): any => {
    const arr = renderTemplate(state);
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
