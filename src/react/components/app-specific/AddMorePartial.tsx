// NOTE Modal for adding more cards in

import React, { Component, ReactElement } from 'react';

import './Comp-modifiers.css';

import { BasicCard, BasicCard2 } from './Placeholder';

import { Heading } from '../base/Heading/Heading';
import { Image } from '../base/Image/Image';
import { Paragraph } from '../base/Paragraph/Paragraph';
import { Button } from '../base/Button/Button';

import { Card } from '../presentational/Card/Card';
import { Modal } from '../presentational/ModalController/Modal/Modal';

// TODO Refactor to accomodate for the ModalController.tsx component

interface BasicObj { [key: string]: any}

interface CardsToDisplay {
  basic1 : boolean
  basic2 : boolean
}

interface Props {
  id?: string
  handleCloseFn?: any
  cardsToDisplay ?: CardsToDisplay
}

const initialState: BasicObj = {
  renderModal: false,
  renderCards: {
    basic1: false,
    basic2: false,
  }
}

type State= Readonly<typeof initialState>

const genericStyle={
  height: '200vh',
  padding: '0.5rem',
  margin: '0',
  background: 'rgb(255, 185, 55)'
}

export class AddMorePartial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    if (!this.props.cardsToDisplay) {
      this.state = initialState
    }
  }


  toggleModalState = (event: React.MouseEvent<HTMLElement>) => {
    // console.log(this.props.children);
    if (event.target instanceof HTMLElement) {
      const { classList, dataset } = event.target;
      const { target } = dataset;
      const targetModalClass = ['modal-wrapper', 'btn--close'];
      const classCheck = (classList.contains(targetModalClass[0]) || classList.contains(targetModalClass[1]));

      if (classCheck === true && !target) {
        this.setState((prevState: State) => ({
          renderModal: !prevState.renderModal
        }));
        return;
      } else if (classCheck === false && target === 'add-more') {
        this.setState((prevState: State) => ({
          renderModal: !prevState.renderModal
        }));
        return;
      }
    }
  }

  toggleCardState = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLElement) {
      const { target } = event.target.dataset;
      console.log(target);
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
    const { id, handleCloseFn } = this.props
    const { renderModal, renderCards } = this.state
    const cardsToRender = [
      (renderCards.basic1 ? BasicCard : null),
      (renderCards.basic2 ? BasicCard2 : null),
    ];

    const AddMore = (
      <Modal
        key={0}
        id={id ? id : 'add-more'}
        type='add-more'
        headerText='Add Cards in'
        handleCloseFn={handleCloseFn ? handleCloseFn : this.toggleModalState}
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
        style={genericStyle}
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