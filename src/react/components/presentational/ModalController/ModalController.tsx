import React ,{ Component, ReactNode, ReactElement, ReactNodeArray } from 'react';

import { AddMorePartial } from '../../app-specific/AddMorePartial';
import { Modal } from './Modal/Modal';

import './Modal.css';

interface BasicObj {
  [key: string] : any
}

const initialState: BasicObj = {
  toDisplay: ''
}

// NOTE Should be passing state in as a prop for Modal Controller to read

export class ModalController extends Component<Props, any>{
  constructor(props: Props) {
    super(props);
    if (!this.props.toDisplay) {
      this.state = initialState;
    }
  }

  hideModal = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) throw new Error(`Expecting a HTMLElement as the target of the event, got ${event.target} instead`);

    const targetModalClass = ['modal-wrapper', 'btn--close'];
    const { classList, dataset, id } = event.target;

    const classCheck = (classList.contains(targetModalClass[0]) || classList.contains(targetModalClass[1]));

    if (classCheck === true) {
      event.stopPropagation();
      console.log('hello there!');
      return;
    }
  }

  renderModal= (): ReactElement<any, any> | null => {
    const { toDisplay, handleCloseFn } = this.props;
    switch(toDisplay) {
      case 'HELP':
        return (
          <div>
            Specific modal for Help here
          </div>
        );

      case 'ADD':
          return (
            <AddMorePartial
              id='add-more'
            />
          );
      case 'BASIC':
        return(
          <Modal
            key={1}
            id='basic'
            type='basic'
            headerText='This is a Basic modal that is expected to work'
            handleCloseFn={handleCloseFn? handleCloseFn : this.hideModal}
          >
            <p>This file holds the text for the various sections of the page. Ideally this would be handled via asynchronous import from an external file, but that's slightly beyond what I'm trying to accomplish for v0.5.0. It probably will be added in at some point though as copy and pasting in the text into the relevant sections is not at all efficient.</p>
          </Modal>
        )
      default:
        return null;
    }
  }

  render() {
    const { handleCloseFn, id } = this.props;
    const toRender = this.renderModal();
    return (
      <section
        id={id ? id : 'modal-controller'}
        className='modal-wrapper'
        onClick={handleCloseFn ? handleCloseFn : this.hideModal}
      >
        {toRender}
      </section>
  )
  }
}

type Modals = 'HELP' | 'ADD' | 'BASIC'

interface Props {
  id ?: string
  handleCloseFn ?: any
  toDisplay ?: Modals | null
}
