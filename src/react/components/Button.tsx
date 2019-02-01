import React ,{ Component, ReactNode, ReactChild } from 'react';

// import { isFunc } from '../helper/typeCheck';

interface Props {
  className?: string,
  innerText: string,
  children?: ReactNode,
}


export class Button extends Component<Props, any> {
  render() {
    const { className, innerText, children } = this.props;

    return (
      <button
        className={`btn ${className}`}
      >
        {innerText}
      </button>
    )
  }
}