import React, { Component, ReactElement } from 'react';

import { TodoCard } from './TodoCard';

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
    console.log(val);
  }

  handleEntryDelete = () => {
    console.log('hi');
  }

  render = (): ReactElement<any, any> => {
    return (
      <div>
        <TodoCard
          handleSubmitFn={ this.handleSubmit }
        />
      </div>
    )
  }
}