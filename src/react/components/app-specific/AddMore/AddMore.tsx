// NOTE Modal for adding more cards in

import React, { Component, ReactElement } from 'react';


import { BasicCard, BasicCard2 } from '../../Placeholder';

import { Heading } from '../../base/Heading/Heading';
import { Image } from '../../base/Image/Image';
import { Paragraph } from '../../base/Paragraph/Paragraph';
import { Button } from '../../base/Button/Button';

import { Card } from '../../presentational/Card/Card';
import { Modal } from '../../presentational/ModalController/Modal/Modal';

import '../Comp-modifiers.css';

// TODO Refactor to accomodate for the ModalController.tsx component

interface CardsToDisplay {
  basic1 : boolean
  basic2 : boolean
}

interface Props {
  id             ?: string
  renderCards     : RenderCards
  handleCloseFn  ?: any
  handleCardFn    : any
  cardsToDisplay ?: CardsToDisplay
}

interface RenderCards {
  basic1 : boolean
  basic2 : boolean
}

const genericStyle={
  height: '200vh',
  padding: '0.5rem',
  margin: '0',
  background: 'rgb(255, 185, 55)'
}

export class AddMore extends Component<Props> {

  render() {
    const { id, handleCloseFn, handleCardFn, renderCards } = this.props

    return(
      <Modal
        key={0}
        id={id ? id : 'add-more'}
        type='add-more'
        headerText='Add Cards in'
        handleCloseFn={handleCloseFn}
      >
        <Button
          innerText={renderCards.basic1 === false ? 'Add card 1' : 'Remove card 1'}
          target='basic1'
          handleClickFn={handleCardFn}
        />
        <Button
          innerText={renderCards.basic2 === false ? 'Add card 2' : 'Remove card 2'}
          target='basic2'
          handleClickFn={handleCardFn}
        />
      </Modal>
    )
  }
}