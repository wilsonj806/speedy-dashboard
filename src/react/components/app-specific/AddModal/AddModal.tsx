// NOTE Modal for adding more cards in

import React, { ReactElement } from 'react';


import { Button } from '../../base/Button/Button';

import { Modal } from '../../presentational/ModalController/Modal/Modal';

import '../Comp-modifiers.css';

export const AddModal = (props: Local.AddModalProps): ReactElement<any, any> => {
  const { id, handleCloseFn, handleCardFn, renderCards } = props

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
      <Button
        key={4}
        innerText={renderCards.todo === false ? 'Add Todo card' : 'Remove Todo card'}
        target='todo'
        handleClickFn={handleCardFn}
      />
    </Modal>
  )
}
