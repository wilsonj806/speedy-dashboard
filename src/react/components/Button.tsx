import React ,{ Component, ReactNode, ReactChild } from 'react';

import '../stylesheets/Button.css';

interface Props {
  type             ?: string
  innerText         : string | null
  isHTMLInputSubmit?: boolean
  children         ?: ReactNode
  handleClickFn    ?: any
  target           ?: string
}

export class Button extends Component<Props, any> {
  render() {
    const { type, innerText, isHTMLInputSubmit, handleClickFn, target } = this.props;
    const btnClass = (type && (type !== 'submit')) ? type : 'std';
    if (isHTMLInputSubmit === true && handleClickFn != null) {
      return(
        <input
          className={`btn btn--${btnClass}`}
          type='submit'
          value='Submit'
          onClick={handleClickFn}
        />
      )
    }
    return (
      <button
        className={`btn btn--${btnClass}`}
        onClick={handleClickFn}
        data-target={target}
      >
        {innerText}
      </button>
    )
  }
}