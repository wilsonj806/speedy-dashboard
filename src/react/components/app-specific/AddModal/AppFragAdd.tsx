import React ,{ Component, ReactNode, ReactElement, ReactNodeArray } from 'react';

import { Button } from '../../base/Button/Button';
import { Modal } from '../../presentational/ModalController/Modal/Modal';
import { ModalController } from '../../presentational/ModalController/ModalController';

import { BasicCard, BasicCard2 } from '../../Placeholder';

import { AddCardState as renderCards, RenderModalState  } from '../../../State';

/* TODO Add handling for adding UNIQUE KEYS for each Card rendered in
Something something:
addchild() {
  React.Children.count()
  React.Children.map(children, () => {
    React.cloneElement()
  }
}

OR:
const initialState = {
  countCards: 0
}
addCard = (): Array<ReactElements> {
  // check state
  // get list of current children that are Cards
  const newCHild = React.cloneElement(children, {key = awerweraw})
  currentLIst.push(newChild)
) */
// TODO Look into using React refs for checking ReactNodes as well


interface BasicObj {
  [key: string] : any
}

interface Props {

}

const initialState: BasicObj = Object.assign({}, RenderModalState, {
  renderCards: {...renderCards}
});

type State = Readonly<typeof initialState>

export class AppFragAdd extends Component<Props, State> {
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

  render() {
    const { toDisplay, renderCards } = this.state;
    const { basic1, basic2} = renderCards;
    const generalStyling = {
      background: 'rgb(255, 185, 55)',
      height: '100vh',
      padding: '10px',
    }
    return (
      <>
        <ModalController
          renderCards={renderCards}
          handleCloseFn={this.hideModal}
          handleCardFn={this.toggleCardState}
          toDisplay={toDisplay}
        />
        <div
          style={generalStyling}
          onClick={this.toggleCardState}
        >
          { (basic1 === true) ? BasicCard : null}
          { (basic2 === true) ? BasicCard2 : null}
          <Button
            target='ADD'
            innerText='Add More Cards'
            handleClickFn={this.handleModalDisplay}
          />
        </div>
      </>
    )
  }
}