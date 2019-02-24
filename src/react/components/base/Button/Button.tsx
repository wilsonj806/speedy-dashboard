import React ,{ Component, ReactElement } from 'react';

import './Button.css';

// TODO Revise to be a Functional component

export const Button = (props: Local.ButtonProps): ReactElement<any, any> => {
  const { type, innerText, isHTMLInputSubmit, handleClickFn, target } = props;
  if (handleClickFn == null) throw new Error('Error')
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
      className={`btn ${type ? `btn--${type}` : 'btn--std'}`}
      onClick={handleClickFn}
      data-target={target}
    >
      {innerText}
    </button>
  )
}
