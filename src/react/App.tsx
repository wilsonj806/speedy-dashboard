import React, { Component } from 'react';

import { ModalController } from './components/presentational/ModalController/ModalController'
import { Dash } from './components/presentational/Dash/Dash'

import { AddModal } from './components/app-specific/AddModal/AddModal'

import { AppState } from './State';


type State = Readonly<typeof AppState>;

// NOTE In terms of order, put the <Modal/> component first
export class App extends Component<any, State> {
  readonly state:State = AppState;

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

  toggleCardState = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLElement) {
      const { target } = event.target.dataset;
      if (typeof target !== 'string') return;
      if (Object.keys(this.state.renderCards).includes(target)) {
      this.setState((prevState: State) => {
        const { renderCards } = prevState;
        return (
          {
            renderCards: {
              ...renderCards,
              [target]: !renderCards[target]
            }
          }
        )
      });
      }
    } else {
      throw new Error('aaaaaaa broken things')
    }
  }

  // TODO figure out what the hell Dash.props.AddMore is
  render() {
    const { toDisplay, renderCards } = this.state
    return(
      <main>
        <ModalController
          renderCards={renderCards}
          handleCloseFn={this.hideModal}
          handleCardFn={this.toggleCardState}
          toDisplay={toDisplay}
        />
        <Dash
          AddCard={null}

        >
          {null}
        </Dash>
      </main>
    )
  }
}