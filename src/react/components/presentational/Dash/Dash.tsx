import React ,{ Component, ReactNode, ReactElement } from 'react';
import { isPrimative, isTypedObj } from '../../../helper/typeCheck';

import './Dash.css';

import { Card } from '../Card/Card';
import { Button } from '../../base/Button/Button';
import { Heading } from '../../base/Heading/Heading';

/* NOTE Dash will NOT know its children ahead of time
  <Dash/> will however, have some preset components passed in because they'll need to be there one way or another
 */

interface Props {
  type?: string
  OpenModal: ReactElement<any, any> | null
  children: ReactNode | null
}

const sayHi = () => console.log('hi');

/* TODO Move AddAction outside of Dash.tsx, need to pass a function for adding cards in,
but <Dash/> doesn't need to know what the function is */

const AddCard = (
  <Card
    type='ind-add'
  >
    {{
      header: (<Heading type='lg' headingLvl={2}>Add Cards In!</Heading>),
      content: null
    }}
  </Card>
)

export class Dash extends Component<Props> {
  render() {
    const { type, children, OpenModal } = this.props
    if ((isTypedObj(OpenModal, 'type')) &&(OpenModal.type.name === 'Card')) {
      const AddAdditionalCards = OpenModal;
      return (
        <section
          className={`dash dash--${type ? type : ''}`}
        >
          {children ? children : AddCard}
          {AddAdditionalCards}
        </section>
      )
    } else if (OpenModal === null) {
      return (
        <section
          className={`dash dash--${type ? type : ''}`}
        >
          {children ? children : AddCard}
        </section>
      )
    } else {
      throw new Error('Error expecting OpenModal to be a Card')
    }
  }
}