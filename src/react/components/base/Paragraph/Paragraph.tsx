import React ,{ Component, ReactNode, ReactChild } from 'react';

import './Paragraph.css'

// TODO Revise to be a Functional component

export const Paragraph = (props: Local.ParagraphProps): JSX.Element => {
  const { children, type } = props;
  if (!children) throw new Error('Erorr expecting children elements');
  return (
    <p
      className={`prgh ${type ? `prgh--${type}` : ''}`}
    >
      {children}
    </p>
  )
}
