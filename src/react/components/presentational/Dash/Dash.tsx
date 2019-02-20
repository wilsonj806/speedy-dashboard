import React ,{ Component, ReactNode, ReactElement } from 'react';
import { isPrimative, isTypedObj } from '../../../helper/typeCheck';

import './Dash.css';

import { Card } from '../Card/Card';

/* NOTE AddMore Prop is for DIRECTLY adding in a <Card/> that will tell the main app to show a Modal interface for adding additional Cards in */

/* TODO Add something to handle the case of maximum number of cards rendered(probably in the form of a modal) */

const EmptyInd = (
  <Card
    type='ind-add'
    id='ind-add'
  >
    {{
      header: null,
      content: null
    }}
  </Card>
)

export class Dash extends Component<Local.DashProps> {
  render = (): ReactElement<any, any> => {
    const { type, children, AddCard, handleCardCloseFn } = this.props;
    if ((isTypedObj(AddCard, 'type')) &&(AddCard.type.name === 'AddCard')) {
      return (
        <section
          className={`dash ${type ? `dash--${type}` : ''}`}
          onClick={handleCardCloseFn}
        >
          {children != null ? children : EmptyInd}
          {AddCard}
        </section>
      )
    } else if (AddCard === null) {
      return (
        <section
          className={`dash ${type ? `dash--${type}` : ''}`}
          onClick={handleCardCloseFn}
        >
          {children != null ? children : EmptyInd}
        </section>
      )
    } else {
      throw new Error('Error expecting AddCard to be a Card')
    }
  }
}
