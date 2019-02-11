import React ,{ Component, ReactElement, ReactChild } from 'react';

import './Card.css';

interface Props {
  id?: string,
  type?: string,
  children: BasicCard,
};


type BasicCard = {
  header: ReactElement<any> | ReactElement<any>[] | null,
  media?: ReactChild,
  content: ReactChild | null,
  action?: ReactElement<any> | ReactElement<any>[]
};

export class Card extends Component<Props> {
  render() {
    const { children, type } = this.props;
    if (!children) throw new Error('Erorr expecting children elements');
      const { header, content, media, action } = children;
      return(
        <div
          className={`card ${type ? `card--${type}` : ''}`}
        >
          {header ? <header className='card__header'>{header}</header> : null}
          {media ? <div className='card__media'>{media}</div> : null}
          {content ? <div className='card__content'>{content}</div> : null}
          {action ? <div className='card__actions'>{action}</div> : null}
        </div>
      )
  }
}
