import React ,{ Component, ReactNode, ReactChild } from 'react';

import './Paragraph.css'


interface Props {
  modifier?: string,
  children: string,
};

// TODO Revise to be a Functional component

export const Paragraph = (props: Props): JSX.Element => {
  const { children, modifier } = props;
  if (!children) throw new Error('Erorr expecting children elements');
  return (
    <p
      className={`prgh ${modifier ? `prgh--${modifier}` : ''}`}
    >
      {children}
    </p>
  )
}
