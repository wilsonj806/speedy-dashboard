import React, { Component, ReactElement } from 'react';

import { ListItem } from './ListItem/ListItem';

import './List.css';

export class List extends Component<Local.ListProps, any> {

  renderChildren = (): ReactElement<any, any> | ReactElement<any, any>[] => {
    const { children } = this.props;
    if (children instanceof Array) {
      const toRender = children.map((child: any): ReactElement<any, any> => {
        return (
          <ListItem
          >
            {child}
          </ListItem>
        )
      });
      return toRender;
    }
    return (
      <ListItem
      >
        {children}
      </ListItem>
    )
  }

  render = (): ReactElement<any, any> | null => {
    const { listType, type } = this.props;
    const toRender = this.renderChildren();
    switch(listType) {
      case 'ul':
        return (
          <ul
            className={`ul ${type ? `ul--${type}` : ''}`}
          >
            {toRender}
          </ul>
        )
      case 'ol':
        return (
          <ol
            className={`ol ${type ? 'ol--type' : ''}`}
          >
            {toRender}
          </ol>
        )
      default:
        return null;
    }
  }
}