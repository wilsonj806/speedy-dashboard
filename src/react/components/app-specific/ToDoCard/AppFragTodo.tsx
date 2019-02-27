import React, { Component, ReactElement, MouseEvent } from 'react';

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
    const { listEle } = this.state;
    const arr = renderTemplate(state, listEle.length, this.handleEntryDelete);
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

  handleEntryDelete = (event: MouseEvent<HTMLButtonElement>) => {
    const { listEle } = this.state;
    if (event.target instanceof HTMLElement) {
      const { target } = event.target.dataset;
      const index = parseInt(target);
      this.setState((prevState: State): State => {
        const { listEle: prevList } = prevState;
        prevList.splice(index, 1);
        return {};
      })
    }
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
