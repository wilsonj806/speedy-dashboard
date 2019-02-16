import React ,{ Component, ReactElement, ReactChild } from 'react';

import './Card.css';

export class Card extends Component<Local.CardProps> {
  render() {
    const { children, type, id } = this.props;
    if (!children) throw new Error('Erorr expecting children elements');
      const { header, content, media, action } = children;
      return(
        <div
          className={`card ${type ? `card--${type}` : ''}`}
          id={id}
        >
          {header ? <header className='card__header'>{header}</header> : null}
          {media ? <div className='card__media'>{media}</div> : null}
          {content ? <div className='card__content'>{content}</div> : null}
          {action ? <div className='card__actions'>{action}</div> : null}
        </div>
      )
  }
}
