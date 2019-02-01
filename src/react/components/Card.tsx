import { Component, ReactNode, ReactChild } from 'react';

interface Props {
  type?: string,
  className?: string,
  children: ReactNode | BasicCard
}

type BasicCard = {
  header: ReactChild | null,
  media?: ReactChild,
  content: ReactChild | null,
  actions?: ReactChild
};

export class Card extends Component<Props, any> {
  render() {
    const { className } = this.props;
    return (
      <div
        className={`card ${className ? className : null}`}
      >
        Card here
      </div>
    )
  }
}