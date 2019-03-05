import React ,{ Component, ReactElement } from 'react';

import './Button.css';

// TODO Revise to be a Functional component

export const Button = (props: Local.ButtonProps): ReactElement<any, any> => {
  const { type, innerText, isHTMLInputSubmit, handleClickFn, target, className } = props;

  const classVar = className ? className : `btn ${type ? `btn--${type}` : 'btn--std'}`;
  if (isHTMLInputSubmit === true ) {
    return(
      <input
        className={`btn btn--submit`}
        type='submit'
        value='Submit'
        onClick={handleClickFn}
      />
    )
  }
  return (
    <button
      className={classVar}
      onClick={handleClickFn}
      data-target={target}
    >
      {innerText}
    </button>
  )
}
