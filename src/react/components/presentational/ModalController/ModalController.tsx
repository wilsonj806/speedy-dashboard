import React ,{ Component, ReactNode, ReactElement, ReactNodeArray } from 'react';

import { AddMore } from '../../app-specific/AddMore/AddMore';
import { Modal } from './Modal/Modal';

import './Modal.css';

const initialState: Local.BasicObj = {
  toDisplay: ''
}

// NOTE Should be passing state in as a prop for Modal Controller to read
// TODO For any state passing as props, UPDATE TO USE THE CONTEXT API AT SOME POINT
// TODO Look into using React refs for passing props also
export class ModalController extends Component<ModalControllerProps, any>{
  constructor(props: ModalControllerProps) {
    super(props);
    if (!this.props.toDisplay) {
      this.state = initialState;
    }
  }

  renderModal = (): ReactElement<any, any> | null => {
    const { toDisplay, renderCards, handleCloseFn, handleCardFn } = this.props;
    switch(toDisplay) {
      case 'HELP':
        return (
          <Modal
            key={1}
            id='help'
            type='help'
            headerText={'It\'s me the help Modal!'}
            handleCloseFn={handleCloseFn}
          >
            <p>I'm the helper modal. Hi!</p>
          </Modal>
        );

      case 'ADD':
          return (
            <AddMore
              id='add-more'
              renderCards={renderCards}
              handleCardFn={handleCardFn}
              handleCloseFn={handleCloseFn}
            />
          );
      case 'BASIC':
        return(
          <Modal
            key={1}
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

type Modals = 'HELP' | 'ADD' | 'BASIC'

interface ModalControllerProps {
  id           ?: string
  renderCards   : RenderCards
  handleCardFn  : any
  handleCloseFn : any
  toDisplay    ?: Modals | null
}

interface RenderCards {
  basic1 : boolean
  basic2 : boolean
}