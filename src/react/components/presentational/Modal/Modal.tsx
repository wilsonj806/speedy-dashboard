import React ,{ Component, ReactNode, ReactChild } from 'react';
import { isFunc } from '../../../helper/typeCheck';
import { capitalizeString } from '../../../helper/helperUtils';

import { Button } from '../../base/Button/Button';
import { Heading } from '../../base/Heading/Heading';
import './Modal.css';

interface Props {
  type: string,
  headerText: string
  children: ReactNode
  updateParentState?: any
  contentModifier?: string
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
    if (!this.props.updateParentState) {console.warn('warning expecting a parent to handle <Modal/> render state')}
  }

  // REVIEW Determine whether or not toggleState() should reside inside or outside the component class

  toggleState = (curriedType: string) =>
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      if (event.target instanceof Element) {
        const targetClasses: DOMTokenList = event.target.classList;
        const isModalWrapper = targetClasses.contains('modal-wrapper');
        const isModalCloseBtn = targetClasses.contains('btn--modal-header');

        if ((isModalWrapper === true) || (isModalCloseBtn === true)) {
          if (isFunc(this.props.updateParentState)) {this.props.updateParentState(curriedType)}
        }
      } else {
        throw new Error(`
          Error expecting mouse event to trigger on an HTML element
          Event was triggered on: ${event.target} instead
        `)
      }
  }

  render() {
    const { type, children, headerText, contentModifier } = this.props;
    return (
      <div
          className='modal-wrapper'
          onClick={this.toggleState(this.props.type)}
      >
        <section
          className={`modal ${type ? `modal--${type}` : ''}`}
        >
          <header
            className='modal__header'
          >
            <Heading
              type='modal'
              headingLvl={2}
            >
              {headerText}
            </Heading>
            <Button
              type='modal-header'
              innerText='&times;'
              handleClickFn={this.toggleState(this.props.type)}
            />
          </header>
          <section
            className={`modal__content ${contentModifier ? `modal__content--${contentModifier}` : ''}`}
          >
            {children}
          </section>
        </section>
      </div>
    )
  }
}