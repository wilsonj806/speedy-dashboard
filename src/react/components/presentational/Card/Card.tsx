import React ,{ Component, ReactNode, ReactChild } from 'react';

import './Card.css';

interface Props {
  type?: string,
  children: BasicCard,
};


type BasicCard = {
  header: ReactChild | null,
  media?: ReactChild,
  content: ReactChild | null,
  actions?: ReactChild
};

export class Card extends Component<Props> {
  render() {
    const { children, type } = this.props;
    if (!children) throw new Error('Erorr expecting children elements');
      const { header, content, media, actions } = children;
      return(
        <div
          className={`card card--${type ? type : ''}`}
        >
          {header ? <header className='card__header'>{header}</header> : null}
          {media ? <div className='card__media'>{media}</div> : null}
          <div className='card__content'>{content}</div>
          {actions ? <div className='card__actions'>{actions}</div> : null}
        </div>
      )
  }
}
