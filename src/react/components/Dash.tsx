import React ,{ Component, ReactNode, ReactChild } from 'react';

// NOTE Dashboard interface for holding cards

interface Props {
  type?: string,
  className?: string,
  children: ReactNode
}

interface DashState {
  cardsRendered: string[]
  [key: string]: any
}

const initialState: DashState = {
  quantityRendered: 0,
  cardsRendered: [],
}

type State = Readonly<typeof initialState>

export class Dashboard extends Component<Props, State> {
  renderChildren() {
    const {children} = this.props;
    if (children == null || typeof children !== 'object') {
      throw new Error('Error, expecting children that are objects')
    }
  }
  readonly state: State = initialState;

  render() {
    const { className } = this.props
    return (
      <section
        className={`dash-grid ${className}`}
      >
        Dash interface here
      </section>
    )
  }
}