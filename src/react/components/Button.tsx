import React ,{ Component, ReactNode, ReactChild } from 'react';

import '../stylesheets/Button.css';

interface Props {
  type        ?: string,
  innerText         : string | null,
  isHTMLInputSubmit?: boolean,
  children         ?: ReactNode,
  handleClickFn    ?: any,
}

export class Button extends Component<Props, any> {
  render() {
    const { type, innerText, isHTMLInputSubmit, handleClickFn } = this.props;
    if (isHTMLInputSubmit === true && handleClickFn != null) {
      return(
        <input
          className={`btn btn--${type}`}
          type='submit'
          value='Submit'
          onClick={handleClickFn}
        />
      )
    }
    return (
      <button
        className={`btn btn--${type}`}
        onClick={handleClickFn}
      >
        {innerText}
      </button>
    )
  }
}