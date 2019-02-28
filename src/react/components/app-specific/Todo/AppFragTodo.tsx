import React, { Component, ReactElement, MouseEvent } from 'react';

import { TodoCard } from './TodoCard';
import { TodoEntry } from './TodoEntry';

const initialState: Local.BasicObj = {
  listEle: []
}

type State = Readonly<typeof initialState>

export class AppFragTodo extends Component<any, State> {
  readonly state: State = initialState;

  handleSubmit = (childState: any): any => {
    this.setState((prevState: State) => {
      const { listEle } = prevState;
      listEle.push(childState);
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
      this.setState((prevState: State): State => {
        const { listEle: prevList } = prevState;
        prevList.splice(target, 1);
        return {};
      })
    }
  }

  renderTemplate = (val: Local.BasicObj, index: number): ReactElement<any> => {
    const { task, priority } = val;
    return (
      <TodoEntry
        key={index}
        index={`${index}`}
        task={task}
        priority={priority}
        handleDeleteFn={this.handleEntryDelete}
      />
    )
  }

  render = (): ReactElement<any, any> => {
    const { listEle } = this.state;
    const toRender = listEle.length > 0 ? listEle.map(this.renderTemplate) : null;
    return (
      <div>
        <TodoCard
          handleSubmitFn={ this.handleSubmit }
        >
          { toRender }
        </TodoCard>
      </div>
    )
  }
}
