import React from 'react';
import { storiesOf } from '@storybook/react';
import { StubbedApp } from '../react/test-stubs/SingleModalDisplay'
import { MultipleSupport } from '../react/test-stubs/MultiModalDisplay'

import { Heading } from '../react/components/base/Heading/Heading';
import { Paragraph } from '../react/components/base/Paragraph/Paragraph';
import { Button } from '../react/components/base/Button/Button';
import { Card } from '../react/components/presentational/Card/Card';
import { Form } from '../react/components/stateful/Forms/Form';
import { Modal } from '../react/components/presentational/Modal/Modal';
import { Dash } from '../react/components/presentational/Dash/Dash';


import '../react/stylesheets/index.css';

// NOTE Dummy Functions


const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};

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

const BasicCard = (
  <Card
    type='basic'
  >
    {{
      header: (<Heading headingLvl={2} type='lg'>I'm a basic card</Heading>),
      content: (<Paragraph>I'm a basic card with basic content</Paragraph>)
    }}
  </Card>
)

storiesOf('Component Groups/ Group of Modals', module)
  .add('multiple modals', () => {
    return (
      <MultipleSupport/>
    )
  });

storiesOf('Component Groups/ Dash', module)
  .add('dash that should throw', () => {
    return (
      <Dash
        OpenModal={<span>hi</span>}
      >
        {null}
      </Dash>
    )
  })
  .add('basic dash with default cards', () => {
    return (
      <Dash
        OpenModal={AddAction}
      >
        {null}
      </Dash>
    )
  })
  .add('dash with a bunch of cards', () => {
    return (
      <Dash
        OpenModal={null}
      >
        {[BasicCard, BasicCard]}
      </Dash>
    )
  });