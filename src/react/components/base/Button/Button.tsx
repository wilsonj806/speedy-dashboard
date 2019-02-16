import React ,{ Component, ReactNode, ReactChild } from 'react';

import './Button.css';

// TODO Revise to be a Functional component

export const Button = (props: Local.ButtonProps): JSX.Element => {
  const { type, innerText, isHTMLInputSubmit, handleClickFn, target } = props;
  if (isHTMLInputSubmit === true && handleClickFn != null) {
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
