// NOTE Modal for adding more cards in

import React, { Component, ReactElement } from 'react';

import './Comp-modifiers.css';

import { BasicCard, BasicCard2 } from './Placeholder';

import { Heading } from '../base/Heading/Heading';
import { Image } from '../base/Image/Image';
import { Paragraph } from '../base/Paragraph/Paragraph';
import { Button } from '../base/Button/Button';

import { Card } from '../presentational/Card/Card';
import { Modal } from '../presentational/Modal/Modal';

interface BasicObj { [key: string]: any}

const initialState: BasicObj = {
  renderModal: false,
  renderCards: {
    basic1: false,
    basic2: false,
  }
}

type State= Readonly<typeof initialState>

/* REVIEW Defining the Modal in the render() space is dumb, for full <App/> integration
do React.Children.map() and React.cloneElement() */

// REVIEW Keep stuff simple! If you don't need to pass props to check an element, DON'T


export class AddMorePartial extends Component<any, State> {

  readonly state: State = initialState

  toggleModalState = (value: string |  React.MouseEvent<HTMLElement>) => {
    // console.log(this.props.children);
    if (typeof value === 'string') {
      this.setState((prevState: State) => {
        const { renderModal } = prevState;
        return ({
          renderModal: !renderModal
        })
      });
      return;
    } else if (value.target instanceof HTMLElement) {
      const { target } = value.target.dataset;
      if (typeof target !== 'string') throw new Error('Error expecting target to be a string');
      this.setState((prevState: State) => ({
        renderModal: !prevState.renderModal
      }))
    }
  }

  toggleCardState = (value: React.MouseEvent<HTMLElement>) => {
    if (value.target instanceof HTMLElement) {
      const { target } = value.target.dataset;
      if (typeof target !== 'string') return;

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
    } else {
      throw new Error('aaaaaaa broken things')
    }
  }

  render() {
    const { renderModal, renderCards } = this.state
    const cardsToRender = [
      (renderCards.basic1 ? BasicCard : null),
      (renderCards.basic2 ? BasicCard2 : null),
    ];

    const AddMore = (
      <Modal
        key={0}
        type='add-more'
        headerText='Add Cards in'
        updateParentState={this.toggleModalState}
      >
        <Button
          innerText={renderCards.basic1 === false ? 'Add card 1' : 'Remove card 1'}
          target='basic1'
          handleClickFn={this.toggleCardState}
        />
        <Button
          innerText={renderCards.basic2 === false ? 'Add card 2' : 'Remove card 2'}
          target='basic2'
          handleClickFn={this.toggleCardState}
        />
      </Modal>
    )
    return(
      <>
      {renderModal ? AddMore : null}
      <section
        onClick={this.toggleCardState}
      >
        {cardsToRender}
        <Button
          innerText='Add Cards'
          target='add-more'
          handleClickFn={this.toggleModalState}
        />
      </section>
      </>
    )
  }
}