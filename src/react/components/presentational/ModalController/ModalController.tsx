import React ,{ Component, ReactNode, ReactElement, ReactNodeArray } from 'react';

import { AddModal } from '../../app-specific/AddModal/AddModal';
import { InfoModal } from '../../app-specific/InfoModal/InfoModal';
import { Modal } from './Modal/Modal';

import './Modal.css';

const initialState: Local.BasicObj = {
  toDisplay: ''
}

// TODO For any state passing as props, UPDATE TO USE THE CONTEXT API AT SOME POINT
// TODO Look into using React refs for passing props also
export class ModalController extends Component<Local.ModalControllerProps, any>{
  constructor(props: Local.ModalControllerProps) {
    super(props);
    if (!this.props.toDisplay) {
      this.state = initialState;
    }
  }

  renderModal = (): ReactElement<any, any> | null => {
    const { toDisplay, renderCards, handleCloseFn, handleCardFn } = this.props;
    switch(toDisplay) {
      case 'INFO':
        return (
          <InfoModal
            handleCloseFn={handleCloseFn}
          />

        );

      case 'ADD':
          return (
            <AddModal
              renderCards={renderCards}
              handleCardFn={handleCardFn}
              handleCloseFn={handleCloseFn}
            />
          );
      case 'BASIC':
        return(
          <Modal
            id='basic'
            type='basic'
            headerText='This is a Basic modal that is expected to work'
            handleCloseFn={handleCloseFn}
          >
            <p>This file holds the text for the various sections of the page. Ideally this would be handled via asynchronous import from an external file, but that's slightly beyond what I'm trying to accomplish for v0.5.0. It probably will be added in at some point though as copy and pasting in the text into the relevant sections is not at all efficient.</p>
          </Modal>
        )
      default:
        return null;
    }
  }

  render = (): ReactElement<any,any> => {
    const { handleCloseFn, id } = this.props;
    const toRender = this.renderModal();
    return (
      <>
        { toRender == null ? null :
          (<section
            id={id ? id : 'modal-controller'}
            className='modal-wrapper'
            onClick={handleCloseFn}
          >
            {toRender}
          </section>)
        }
      </>
  )
  }
}

