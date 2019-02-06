import React ,{ Component, ReactNode, ReactChild } from 'react';

interface Props {
  className        ?: string,
  innerText         : string | null,
  isHTMLInputSubmit?: boolean,
  children         ?: ReactNode,
  handleClickFn    ?: any,
}

export class Button extends Component<Props, any> {
  render() {
    const { className, innerText, isHTMLInputSubmit, handleClickFn } = this.props;
    if (isHTMLInputSubmit === true && handleClickFn != null) {
      return(
        <input
          className={`btn ${className}`}
          type='submit'
          value='Submit'
          onClick={handleClickFn}
        />
      )
    }
    return (
      <button
        className={`btn ${className}`}
        onClick={handleClickFn}
      >
        {innerText}
      </button>
    )
  }
}