import React ,{ Component, ReactNode, ReactChild } from 'react';

import '../stylesheets/Modal.css';

interface Props {
  type?: string,
  className?: string,
}

interface ModalState {
  zIndex: number
  [key: string]: any
}

const initialState: ModalState = {
  zIndex: -5
}

type State = Readonly<typeof initialState>

export class Modal extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  readonly state: State = initialState;

/* NOTE Use componentDidMount() and componentDidUnmount() lifecycle methods to set z-index?
  it means not having to use js's document.documentElement.style and stuff to toggle */

  render() {
    const { type, className, children } = this.props;
    const sayHi = () => console.log('hi');

    return(
      <div
        className='modal-wrapper'
        onClick={sayHi}
      >
        <section
          className={`modal ${className ? className : null} modal--${type}`}
        >
          I'm a modal
        </section>
      </div>
    )
  }
}