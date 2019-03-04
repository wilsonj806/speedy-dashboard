// NOTE Modal for adding more cards in

import React, { ReactElement } from 'react';


import { Image } from '../../base/Image/Image';
import { Button } from '../../base/Button/Button';
import { Paragraph } from '../../base/Paragraph/Paragraph';
import { Card } from '../../presentational/Card/Card';

import { Modal } from '../../presentational/ModalController/Modal/Modal';

import { EntryCard } from './EntryCard';

import './AddModal.css';

export const AddModal = (props: Local.AddModalProps): ReactElement<any, any> => {
  const { id, handleCloseFn, handleCardFn, renderCards } = props
  // TODO add EntryCard stuff in
  return(
    <Modal
      key={0}
      id={id ? id : 'add-more'}
      type='add-more'
      headerText='Add Cards in'
      handleCloseFn={handleCloseFn}
    >
      <EntryCard
        key={0}
        cardSwitch='basic1'
        renderCards={renderCards}
        handleClickFn={handleCardFn}
      />
      <EntryCard
        key={1}
        cardSwitch='basic2'
        renderCards={renderCards}
        handleClickFn={handleCardFn}
      />
      <EntryCard
        key={2}
        cardSwitch='cat'
        renderCards={renderCards}
        handleClickFn={handleCardFn}
      />
      <EntryCard
        key={3}
        cardSwitch='lorem'
        renderCards={renderCards}
        handleClickFn={handleCardFn}
      />
      <EntryCard
        key={4}
        cardSwitch='todo'
        renderCards={renderCards}
        handleClickFn={handleCardFn}
      />
    </Modal>
  )
}
