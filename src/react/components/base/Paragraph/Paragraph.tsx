import React ,{ Component, ReactNode, ReactChild } from 'react';

import './Paragraph.css'


interface Props {
  type?: string,
  children: any,
};

// TODO Revise to be a Functional component

export const Paragraph = (props: Props): JSX.Element => {
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
