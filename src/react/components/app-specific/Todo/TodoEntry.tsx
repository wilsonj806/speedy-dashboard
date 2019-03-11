import React, { ReactElement } from 'react';

import { Button } from '../../base/Button/Button';
import { Paragraph } from '../../base/Paragraph/Paragraph';

import './Todo.css';

export const TodoEntry = (props: Local.TodoEntryProps): ReactElement<Local.TodoEntryProps> => {
  const { index, task, priority, handleDeleteFn } = props;
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
      handleClickFn={handleDeleteFn}
    />
  )
  const prgh = (
    <Paragraph
      key={2}
      type='todo'
    >{ task }
    </Paragraph>
  );
  return (
    <>
      {priorityDiv}
      {prgh}
      {deleteBtn}
    </>
  )
}