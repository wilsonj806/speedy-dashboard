import React ,{ Component, ReactNode, ReactChild } from 'react';

// NOTE Dashboard interface for holding cards

interface Props {
  type?: string,
  className?: string,
  children: ReactNode
}

export class Dashboard extends Component<Props, any> {
  renderChildren() {
    const {children} = this.props;
    if (children == null || typeof children !== 'object') {
      throw new Error('Error, expecting children that are objects')
    }
  }

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