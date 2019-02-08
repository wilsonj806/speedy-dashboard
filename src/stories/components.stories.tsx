import React from 'react';
import { storiesOf } from '@storybook/react';
import { StubbedApp } from '../react/test-stubs/SingleModalDisplay'
import { MultipleSupport } from '../react/test-stubs/MultiModalDisplay'

import { Heading } from '../react/components/base/Heading/Heading';
import { Card } from '../react/components/presentational/Card/Card';
import { Field } from '../react/components/base/Field/Field';
import { Form } from '../react/components/stateful/Forms/Form';
import { Modal } from '../react/components/presentational/Modal/Modal';
import { Button } from '../react/components/base/Button/Button';


import '../react/stylesheets/index.css';

// NOTE Dummy Functions

const sayHi = (event: React.MouseEvent<HTMLInputElement>) => {
  console.log('hi');
};
const cssCenter = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

storiesOf('Low Level Components/ Heading', module)
  .add('heading that should throw', () => {
    return (
      <Heading type='lg' headingLvl={0}>Add Cards In!</Heading>
    )
  })
  .add('h1 heading', () => {
    return (
      <Heading type='lg' headingLvl={1}>Add Cards In!</Heading>
    )
})
.add('h6', () => {
  return (
    <Heading type='lg' headingLvl={6}>Add Cards In!</Heading>
  )
});

storiesOf('Low Level Components/ Button', module)
  .add('basic button', () => {
    return (
      <div style={cssCenter}>
        <Button
          type='std'
          innerText={`Click me`}
          handleClickFn={sayHi}
          />
      </div>
    )
  })
  .add('info button', () => {
    return (
      <div style={cssCenter}>
        <Button
          type='info'
          innerText={`Info`}
          handleClickFn={sayHi}
          />
      </div>
    )
});

storiesOf('Low Level Components/ Card', module)
  .add('basic card', () => {
    return (
      <Card
        type='basic'
      >
      {{
        header: 'I\'m a card with a header and some content',
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

storiesOf('Low Level Components/ Field', module)
  .add('Labeless input', () => {
    return (
      <Field
        type='number'
        name='example button'
        noLabel={true}
      />
    )
  })
  .add('Basic text field', () => {
    return (
      <Field
        type='text'
        name='exmaple'
      />
    )
  })
  .add('Field with state', () => {
    return (
      <Field
        type='text'
        name='exmaple'
      />
    )
  })
  .add('Field with a different onchange handler', () => {
    return (
      <Field
        type='text'
        name='exmaple'
        handleChangeFn={sayHi}
      />
    )
  });

storiesOf('Low Level Components/ Form', module)
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

storiesOf('Low Level Components/ Modal', module)
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

/* storiesOf('Low Level Components/ extra', module)
  .add('a thing that renders something simple', () => {
    const isGoingToRender: boolean = true;
    const div = (<div>I'm a div</div>);
    return (
      <>
        {(isGoingToRender) ? div : null}
      </>
    )
  }) */