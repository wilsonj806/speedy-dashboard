import React ,{ Component, ReactNode, ReactChild } from 'react';
import { capitalizeString } from '../helper/helperUtils';

import { Button } from './Button';
import '../stylesheets/Modal.css';

interface Props {
  type: string,
  headerText: string
  className?: string,
  children: ReactNode
}

interface ModalState {
  [key: string]: any
}

const initialState: ModalState = {
  renderModal: true
}

type State = Readonly<typeof initialState>

export class Modal extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  readonly state: State = initialState;

/* NOTE Use componentDidMount() and componentDidUnmount() lifecycle methods to set z-index?
  it means not having to use js's document.documentElement.style and stuff to toggle */

  toggleState = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (event.target instanceof Element) {
      const targetClasses: DOMTokenList = event.target.classList;
      const isModalWrapper = targetClasses.contains('modal-wrapper');
      const isModalCloseBtn = targetClasses.contains('btn--modal-header');
      if ((isModalWrapper === true) || (isModalCloseBtn === true)) {
        this.setState((prevState: State) => ({renderModal: !prevState.renderModal}))
      }
    } else {
      throw new Error(`
        Error expecting mouse event to trigger on an HTML element
        Event was triggered on: ${event.target} instead
      `)
    }
  }

  render() {
    const { type, className, children, headerText } = this.props;
    const { renderModal } = this.state;

    const toRender = (renderModal === true) ?
      (
        <div
            className='modal-wrapper'
            onClick={this.toggleState}
        >
          <section
            className={`modal ${className ? className : null} modal--${type}`}
          >
            <header
              className='modal__header'
            >
              <h2
                className='heading heading--lg'
              >
                {headerText}
              </h2>
              <Button
                type='modal-header'
                innerText='&times;'
                handleClickFn={this.toggleState}
              />
            </header>
            <div
              className='modal__content'
            >
              {children}
            </div>
          </section>
        </div>
      ) : null;

    return(
      <>
        {toRender}
      </>
    )
  }
}