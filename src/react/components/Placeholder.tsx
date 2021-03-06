import React from 'react';

import { Heading } from './base/Heading/Heading';
import { Paragraph } from './base/Paragraph/Paragraph';
import { Button } from './base/Button/Button';
import { Card } from './presentational/Card/Card';
import { Form } from './stateful/Forms/Form';
import { Modal } from './presentational/ModalController/Modal/Modal';
import { Dash } from './presentational/Dash/Dash';

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};

const BasicCard = (
  <Card
    key={undefined}
    id='basicCard1'
    type='basic basic1'
  >
    {{
      header: ([
        <Heading headingLvl={3}>
          I'm a card with some content
        </Heading>,
        <Button
          type='close'
          target='basic1'
          innerText='&times;'
        />
      ]),
      content: (
        <Paragraph>
        Sed varius euismod mi vel mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras quam sapien, semper id leo sed, gravida ultrices eros. Cras ipsum magna, mollis ut dui ac, blandit rutrum elit.
      </Paragraph>
      )
    }}
  </Card>
)
const BasicCard2 = (
  <Card
    key={undefined}
    id='basicCard2'
    type='basic basic2'
  >
    {{
      header: ([
        <Heading headingLvl={3}>
          I'm a different card with some content
        </Heading>,
        <Button
          type='close'
          innerText='&times;'
          target='basic2'
        />
      ]),
      content: (
        <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc tu nunc in illo probas. Sed tamen intellego quid velit. Respondeat totidem verbis. De quibus cupio scire quid sentias. An eiusdem modi?
      </Paragraph>
      )
    }}
  </Card>
)

export {
  sayHi,
  BasicCard,
  BasicCard2,
}