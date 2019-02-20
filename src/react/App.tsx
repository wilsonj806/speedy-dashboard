import React, { Component, ReactElement } from 'react';

import { ModalController } from './components/presentational/ModalController/ModalController'
import { Dash } from './components/presentational/Dash/Dash'

import { AddCard } from './components/app-specific/AddCard'
import { CatCard } from './components/app-specific/CatCard'
import { LoremCard } from './components/app-specific/LoremCard'

import { BasicCard, BasicCard2 } from './components/Placeholder'

import { AppState } from './State'


type State = Readonly<typeof AppState>;

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
      throw new Error(`Expecting event target to be an instance of HTMLElement,
      got ${event.target} instead`)
    }
  }

  renderCardsState = (): ReactElement<any, any>[] | null => {
    const { renderCards } = this.state;
    // TODO find a way to fetch the current list of children
    const childArr: Array<ReactElement<any, any>> = [];
    for (const key in renderCards) {
      switch (key) {
        case 'cat':
          if (renderCards[key] === true) {
            const Cat = <CatCard/>;
            childArr.push(Cat);
            break;
          }
        case 'lorem':
          if (renderCards[key] === true) {
            const card = <LoremCard/>;
            childArr.push(card);
            break;
          }
        case 'basic1':
          if (renderCards[key] === true) {
            const card = BasicCard;
            childArr.push(card);
            break;
          }
        case 'basic2':
          if (renderCards[key] === true) {
            const card = BasicCard2;
            childArr.push(card);
            break;
          }
        default:
          break;
      }
    }
    const length = childArr.length;
    return length === 0 ? null : childArr;
  }

  // TODO add Card rendering using React.cloneElement()
  // TODO add keys to each card
  render() {
    const { toDisplay, renderCards } = this.state
    const childrenFromState = this.renderCardsState();
    return(
      <main>
        <ModalController
          renderCards={renderCards}
          handleCloseFn={this.hideModal}
          handleCardFn={this.toggleCardState}
          toDisplay={toDisplay}
        />
        <Dash
          AddCard={
            <AddCard
              handleAddFn={this.handleModalDisplay}
            />
          }
        >
          {childrenFromState}
        </Dash>
      </main>
    )
  }
}