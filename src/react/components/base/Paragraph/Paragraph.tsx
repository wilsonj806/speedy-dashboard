import React ,{ ReactElement } from 'react';

import './Paragraph.css'

export const Paragraph = (props: Local.ParagraphProps): ReactElement<any, any> => {
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
