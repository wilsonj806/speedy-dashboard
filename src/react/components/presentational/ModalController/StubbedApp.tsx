import React ,{ Component, ReactNode, ReactElement, ReactNodeArray } from 'react';

import { Button } from '../../base/Button/Button';
import { Modal } from './Modal/Modal';
import { ModalController } from './ModalController';

import './Modal.css';

interface BasicObj {
  [key: string] : any
}

interface Props {

}

const initialState: BasicObj = {
  toDisplay: ''
}

type State = Readonly<typeof initialState>

export class StubbedApp extends Component<Props, State> {
  readonly state: State = initialState;

  handleModalDisplay = (event: React.MouseEvent<HTMLElement>): void => {
    if (!(event.target instanceof HTMLElement)) throw new Error(`Expecting a HTMLElement as the target of the event, got ${event.target} instead`);
    const { target } = event.target.dataset;

    this.setState({
      toDisplay: target
    });

  }

  hideModal = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) throw new Error(`Expecting a HTMLElement as the target of the event, got ${event.target} instead`);

    const targetModalClass = ['modal-wrapper', 'btn--close'];
    const { classList } = event.target;

    const classCheck = (classList.contains(targetModalClass[0]) || classList.contains(targetModalClass[1]));

    if (classCheck === true) {
      event.stopPropagation();
      this.setState({
        toDisplay: null
      })
      return;
    }
  }

  render() {
    const { toDisplay } = this.state;
    const generalStyling = {
      background: 'rgb(180,255,90)',
      height: '100vh'
    }
    return (
      <>
      <ModalController
        handleCloseFn={this.hideModal}
        toDisplay={toDisplay}
      />
      <div
        style={generalStyling}
      >
        <Button
          target='HELP'
          innerText='Render Help'
          handleClickFn={this.handleModalDisplay}
        />
        <Button
          target='BASIC'
          innerText='Render Basic'
          handleClickFn={this.handleModalDisplay}
        />
        <Button
          target='ADD'
          innerText='Render Add More'
          handleClickFn={this.handleModalDisplay}
        />
      </div>
      </>
    )
  }
}