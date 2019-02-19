// NOTE Modal for adding more cards in

import React, { Component, ReactElement } from 'react';


import { Button } from '../../base/Button/Button';

import { Card } from '../../presentational/Card/Card';
import { Modal } from '../../presentational/ModalController/Modal/Modal';

import '../Comp-modifiers.css';

// TODO Refactor to accomodate for the ModalController.tsx component


export class AddModal extends Component<Local.AddModalProps, any> {

  render = (): ReactElement<any, any> => {
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
          key={0}
          innerText={renderCards.basic1 === false ? 'Add card 1' : 'Remove card 1'}
          target='basic1'
          handleClickFn={handleCardFn}
          />
        <Button
          key={1}
          innerText={renderCards.basic2 === false ? 'Add card 2' : 'Remove card 2'}
          target='basic2'
          handleClickFn={handleCardFn}
          />
        <Button
          key={2}
          innerText={renderCards.cat === false ? 'Add cat card' : 'Remove cat card'}
          target='cat'
          handleClickFn={handleCardFn}
          />
        <Button
          key={3}
          innerText={renderCards.lorem === false ? 'Add lorem card' : 'Remove lorem card'}
          target='lorem'
          handleClickFn={handleCardFn}
        />
      </Modal>
    )
  }
}