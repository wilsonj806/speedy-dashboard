// NOTE Modal for adding more cards in

import React, { ReactElement } from 'react';

import { Modal } from '../../component.lib';

import { EntryCard } from './EntryCard';

import './AddModal.css';

export const AddModal = (props: Local.AddModalProps): ReactElement<any, any> => {
  const { id, handleCloseFn, handleCardFn, renderCards } = props

  const entryCards = Object.keys(renderCards).map((key: string, index: number) => {
    return (
      <EntryCard
        key={index}
        cardSwitch={key as Local.DashCardOptions}
        renderCards={renderCards}
        handleClickFn={handleCardFn}
      />
    )
  })
  return(
    <Modal
      key={0}
      id={id ? id : 'add-more'}
      type='add-more'
      headerText='Add Cards in'
      handleCloseFn={handleCloseFn}
    >
      { entryCards }
    </Modal>
  )
}
