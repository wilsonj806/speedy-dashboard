import React ,{ Component, ReactNode, ReactElement } from 'react';
import { isPrimative, isTypedObj } from '../../../helper/typeCheck';

import './Dash.css';

import { Card } from '../Card/Card';

/* NOTE Dash will NOT know its children ahead of time
  <Dash/> will however, have some preset components passed in because they'll need to be there one way or another
 */

/* NOTE AddMore Prop is for DIRECTLY adding in a <Card/> that will tell the main app to show a Modal interface for adding additional Cards in */
interface Props {
  type?: string
  AddMore: ReactElement<any, any> | null
  children: ReactNode | null
}

const sayHi = () => console.log('hi');

/* TODO Add something to handle the case of maximum number of cards rendered(probably in the form of a modal) */

const AddCard = (
  <Card
    type='ind-add'
  >
    {{
      header: null,
      content: null
    }}
  </Card>
)

export class Dash extends Component<Props> {
  render() {
    const { type, children, AddMore } = this.props
    if ((isTypedObj(AddMore, 'type')) &&(AddMore.type.name === 'Card')) {
      const AddAdditionalCards = AddMore;
      return (
        <section
          className={`dash ${type ? `dash--${type}` : ''}`}
        >
          {children ? children : AddCard}
          {AddAdditionalCards}
        </section>
      )
    } else if (AddMore === null) {
      return (
        <section
          className={`dash ${type ? `dash--${type}` : ''}`}
        >
          {children ? children : AddCard}
        </section>
      )
    } else {
      throw new Error('Error expecting AddMore to be a Card')
    }
  }
}
