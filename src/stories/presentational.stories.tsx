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

const AddMore = (
  <Card
    type='add-cards'
  >
    {{
        header: (<Heading type='ind-add' headingLvl={3}>Add Cards In!</Heading>),
        content: null,
        action: (
          <Button
            type='add-cards'
            innerText='+'
            target='addCards'
            handleClickFn={sayHi}
          />
        )
    }}
  </Card>
);

const BasicCard = (
  <Card
    type='basic'
  >
    {{
      header: ([
        <Heading headingLvl={2}>I'm a card with a header and some content</Heading>,
      ]),
      content: (
        <Paragraph>
        Sed varius euismod mi vel mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras quam sapien, semper id leo sed, gravida ultrices eros. Cras ipsum magna, mollis ut dui ac, blandit rutrum elit.
      </Paragraph>
      )
    }}
  </Card>
)

storiesOf('Presentational Components/ Card', module)
  .add('basic card', () => {
    return (
      <Card
        type='basic'
      >
      {{
        header: ([
          <Heading headingLvl={2}>I'm a card with a header and some content</Heading>,
        ]),
        content: (
          <>
            <p>
              Here's some content
            </p>
            <p>
              Here's some more content
            </p>
          </>
        ),
      }}
    </Card>
    )
});

storiesOf('Presentational Components/ Dash', module)
  .add('dash that should throw', () => {
    return (
      <Dash
      AddMore={<span>hi</span>}
      >
          {null}
        </Dash>
      )
  })
  .add('basic dash with default cards', () => {
    return (
      <Dash
        type='storybook-test'
        AddMore={AddMore}
      >
        {null}
      </Dash>
    )
  })
  .add('dash with a bunch of cards', () => {
    return (
      <Dash
        type='storybook-test'
        AddMore={null}
      >
        {[BasicCard, BasicCard]}
      </Dash>
    )
  })
  .add('dash with two rows of cards', () => {
    return (
      <Dash
        type='storybook-test'
        AddMore={null}
      >
        {[BasicCard, BasicCard, BasicCard, BasicCard, BasicCard, BasicCard]}
      </Dash>
    )
  })
  .add('dash with cards and the default card', () => {
    return (
      <Dash
        type='storybook-test'
        AddMore={AddMore}
      >
        {[BasicCard, BasicCard, BasicCard, BasicCard, BasicCard, BasicCard]}
      </Dash>
    )
  });

storiesOf('Presentational Components/ Form', module)
  .add('New form', () => {
    return (
      <Form
        handleSubmitFn={sayHi}
      >
        {[
          {
            type:'text',
            name:'task',
            value:''
          },
          {
            type:'text',
            name: 'priority',
            value:''
          },
        ]}
      </Form>
    )
  });

storiesOf('Presentational Components/ Modal', module)
  .add('a basic modal', () => {
    return (
      <Modal
        type='basic'
        headerText={'I\'m a basic modal'}
        children={'I\'m a basic modal'}
      />
    )
  })
  .add('simple modal with partial integration', () => {
    return (
      <StubbedApp>
        <Modal
          type='basic'
          headerText={'I\'m a basic modal'}
        >
          <p>I should close if the user clicks outside the modal or clicks on the close button</p>
        </Modal>
      </StubbedApp>
    )
  })
  .add('multiple modals', () => {
    return (
      <MultipleSupport/>
    )
  });
