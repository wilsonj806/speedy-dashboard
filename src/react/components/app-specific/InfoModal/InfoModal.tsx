// NOTE Modal for adding more cards in

import React, { ReactElement } from 'react';


import { Modal, Paragraph } from '../../component.lib';


import '../Comp-modifiers.css';

export const InfoModal = (props: Local.InfoModalProps): ReactElement<any, any> => {
  const { id, handleCloseFn } = props

  return(
    <Modal
      key={0}
      id={id ? id : 'info'}
      type='info'
      headerText='About this app'
      handleCloseFn={handleCloseFn}
    >
      <Paragraph>
        This app is a dashboard meant to present some either relevant or whismical content in the form of cards. In addition,the app allows users to add or remove cards as they please.
      </Paragraph>
      <Paragraph>
        Built using <a href='https://facebook.github.io/create-react-app/'>Create React App</a>, <a href='https://www.typescriptlang.org/'>TypeScript</a>, and <a href='https://storybook.js.org/'>Storybook</a>.
      </Paragraph>
    </Modal>
  )
}
