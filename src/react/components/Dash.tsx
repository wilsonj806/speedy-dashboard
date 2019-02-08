import React ,{ Component, ReactNode, ReactChild } from 'react';

import { Card } from './Card';
import { Button } from './Button';
import { Heading } from './Heading';

// NOTE Dashboard interface for holding cards

// TODO decide whether or not Dashboard should know what children its going to have ahead of time/ is going to be a Container component over a Presentational Component

/* NOTE merits of not knowing its children/ making this a Container/
something else can figure out its state is instead of Dash so more separation of concerns
don't have to update this component whenever you add a new type of card, it gets done in the parent


NOTE demerits of defining its children inside the Component
more complex probably
*/

interface Props {
  type?: string
  className?: string
  children: ReactNode | null
}

interface DashState {
  cardsRendered: string[]
  [key: string]: any
}

const initialState: DashState = {
  quantityRendered: 0,
  cardsRendered: [],
}

type State = Readonly<typeof initialState>
const sayHi = () => console.log('hi');
const AddAction = (
  <Card
    type='add-cards'
  >
    {
      {
        header: null,
        content: null,
        actions: (
          <Button
            type='add-card'
            innerText='+'
            target='addCards'
            handleClickFn={sayHi}
          />
        )
      }
    }
  </Card>
);
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

export class Dash extends Component<Props, State> {
  renderChildren() {
    const {children} = this.props;
    if (children == null || typeof children !== 'object') {
      throw new Error('Error, expecting children that are objects')
    }
  }
  readonly state: State = initialState;

  render() {
    const { className, children } = this.props
    const toRender = children ? children : null;
    return (
      <section
        className={`dash-grid ${className}`}
      >
        {children ? children : AddCard}
        {AddAction}
      </section>
    )
  }
}