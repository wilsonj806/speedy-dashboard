import React ,{ Component, ReactNode, ReactChild } from 'react';

import './Heading.css'

export const Heading = (props: Local.HeadingProps): JSX.Element => {
  const { children, type, headingLvl } = props;
  if (!children) throw new Error('Erorr expecting children elements');
  switch(headingLvl) {
    case 1:
      return (
        <h1
          className={`heading ${type ? `heading--${type}` : ''}`}
        >
          {children}
        </h1>
      )
    case 2:
      return (
        <h2
          className={`heading ${type ? `heading--${type}` : ''}`}
        >
          {children}
        </h2>
      )
    case 3:
      return (
        <h3
          className={`heading ${type ? `heading--${type}` : ''}`}
        >
          {children}
        </h3>
      )
    case 4:
      return (
        <h4
        className={`heading ${type ? `heading--${type}` : ''}`}
        >
          {children}
        </h4>
      )
    case 5:
      return (
        <h4
        className={`heading ${type ? `heading--${type}` : ''}`}
        >
          {children}
        </h4>
      )
    case 6:
      return (
        <h6
        className={`heading ${type ? `heading--${type}` : ''}`}
        >
          {children}
        </h6>
      )
    default:
      throw new Error('Expecting values from 1 to 6')
  }
}
