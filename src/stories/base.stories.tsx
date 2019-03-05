import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Field, Heading, Paragraph } from '../react/components/component.lib';


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

storiesOf('Base/ Button', module)
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

storiesOf('Base/ Field', module)
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

storiesOf('Base/ Heading', module)
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

storiesOf('Base/ Paragraph', module)
  .add('paragraph with text', () => {
    return (
      <Paragraph>
        Sed varius euismod mi vel mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras quam sapien, semper id leo sed, gravida ultrices eros. Cras ipsum magna, mollis ut dui ac, blandit rutrum elit.
      </Paragraph>
    )
  })
  .add('paragraph with embedded link', () => {
    return (
      <Paragraph>
        Sed varius euismod mi vel <a href='https://www.google.com/'>I'm a link</a>. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras quam sapien, semper id leo sed, gravida ultrices eros. Cras ipsum magna, mollis ut dui ac, blandit rutrum elit.
      </Paragraph>
    )
  });
