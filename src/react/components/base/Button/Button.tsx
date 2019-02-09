import React ,{ Component, ReactNode, ReactChild } from 'react';

import './Button.css';

interface Props {
  type             ?: string
  innerText         : string | null
  isHTMLInputSubmit?: boolean
  children         ?: ReactNode
  handleClickFn    ?: any
  target           ?: string
}

// TODO Revise to be a Functional component

export const Button = (props: Props): JSX.Element => {
  const { type, innerText, isHTMLInputSubmit, handleClickFn, target } = props;

  const btnClass = (type && (type !== 'submit')) ? type : 'std';
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
