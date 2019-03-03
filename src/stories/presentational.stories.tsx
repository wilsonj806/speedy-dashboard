import React from 'react';
import { storiesOf } from '@storybook/react';

import { Heading } from '../react/components/base/Heading/Heading';
import { Paragraph } from '../react/components/base/Paragraph/Paragraph';

import { Card } from '../react/components/presentational/Card/Card';
import { ListItem } from '../react/components/presentational/List/ListItem/ListItem';
import { Modal } from '../react/components/presentational/ModalController/Modal/Modal';


import { Dash } from '../react/components/presentational/Dash/Dash';
import { List } from '../react/components/presentational/List/List';
import { ModalController } from '../react/components/presentational/ModalController/ModalController';
import { AppFragController } from '../react/components/presentational/ModalController/AppFragController';

import { AddCard } from '../react/components/app-specific/AddCard';

const cssCenter = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgb(255, 185, 55)'
}

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};

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

storiesOf('Presentational/ Card', module)
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

storiesOf('Presentational/ Dash', module)
  .add('dash that should throw', () => {
    return (
      <Dash
        AddCard={<span>hi</span>}
      >
          {null}
        </Dash>
      )
  })
  .add('basic dash with default cards', () => {
    return (
      <Dash
        type='storybook-test'
        AddCard={
        <AddCard
          handleAddFn={sayHi}
        />}
      >
        {null}
      </Dash>
    )
  })
  .add('dash with a bunch of cards', () => {
    return (
      <Dash
        type='storybook-test'
        AddCard={null}
      >
        {[BasicCard, BasicCard]}
      </Dash>
    )
  })
  .add('dash with two rows of cards', () => {
    return (
      <Dash
        type='storybook-test'
        AddCard={null}
      >
        {[BasicCard, BasicCard, BasicCard, BasicCard, BasicCard, BasicCard]}
      </Dash>
    )
  })
  .add('dash with cards and the default card', () => {
    return (
      <Dash
        type='storybook-test'
        AddCard={
          <AddCard
            handleAddFn={sayHi}
          />}
      >
        {[BasicCard, BasicCard, BasicCard, BasicCard, BasicCard, BasicCard]}
      </Dash>
    )
  });

storiesOf('Presentational/ Lists', module)
  .add('a basic unordered list', () => {
    return (
      <div
        style={cssCenter}
      >
        <List
          listType={'ul'}
        >
          {[
            'hi',
            'hello',
            'konichiwa',
            'hola'
            ]}
        </List>
      </div>
    )
  })
  .add('a basic ordered list', () => {
    return (
      <div
        style={cssCenter}
      >
        <List
          listType={'ol'}
        >
          {[
            'hi',
            'hello',
            'konichiwa',
            'hola'
            ]}
        </List>
      </div>
    )
  });

storiesOf('Presentational/ Modal', module)
  .add('a basic modal', () => {
    return (
      <Modal
        id='basic'
        type='basic'
        headerText={'I\'m a basic modal'}
        children={'I\'m a basic modal'}
        handleCloseFn={null}
      />
    )
  });


  storiesOf('Presentational/ ModalController', module)
    .add('modal controller no parent state', () => {
      return(
        <>
          <ModalController
            renderCards={{
              basic1: false,
              basic2: false
            }}
            handleCardFn={null}
            handleCloseFn={null}
            toDisplay='BASIC'
          />
          <section>
            <Paragraph>
            beyond what I'm trying to accomplish for v0.5.0. It probably will be added in at some point though as copy and pasting in the text into the relevant secti
            </Paragraph>
          </section>
        </>
      )
    })
    .add('modal controller with parent passing props', () => {
      return(
        <AppFragController/>
      )
    })