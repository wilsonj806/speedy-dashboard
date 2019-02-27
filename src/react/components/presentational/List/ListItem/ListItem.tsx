import React ,{ ReactElement } from 'react';

import '../List.css'

export const ListItem = (props: Local.ListItemProps): ReactElement<any, any> => {
  const { children, type } = props;
  if (!children) throw new Error('Erorr expecting children elements');
  return (
    <li
      className={`list-item ${type ? `list-item--${type}` : ''}`}
    >
      {children}
    </li>
  )
}
