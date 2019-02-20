import React ,{ Component, ReactElement } from 'react';

import { Button } from '../../../base/Button/Button';
import { Heading } from '../../../base/Heading/Heading';
import '../Modal.css';

export class Modal extends Component<Local.ModalProps> {
  constructor(props: any) {
    super(props);
    if (!this.props.handleCloseFn) {console.warn('warning expecting a parent to handle <Modal/> render state')}
  }

  render = (): ReactElement<any, any> => {
    const { type, children, headerText, contentModifier, handleCloseFn, id } = this.props;
    return (
        <section
          className={`modal ${type ? `modal--${type}` : ''}`}
          id={id}
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
              type='close'
              innerText='&times;'
              handleClickFn={handleCloseFn}
            />
          </header>
          <section
            className={`modal__content ${contentModifier ? `modal__content--${contentModifier}` : ''}`}
          >
            {children}
          </section>
        </section>
    )
  }
}
