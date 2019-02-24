import React, {ReactNode} from 'react';
import { storiesOf } from '@storybook/react';

import { Heading } from '../react/components/base/Heading/Heading';
import { Paragraph } from '../react/components/base/Paragraph/Paragraph';
import { Button } from '../react/components/base/Button/Button';
import { Card } from '../react/components/presentational/Card/Card';
import { Dash } from '../react/components/presentational/Dash/Dash';
import { Form } from '../react/components/stateful/Forms/Form';

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

storiesOf('Stateful/ Form', module)
  .add('Form', () => {
    return (
      <div style={cssCenter}>
        <Form
          handleSubmitFn={sayHi}
        >
          {[
            {
              type: 'text',
              name: 'task'
            }
          ]}
        </Form>
      </div>
    )
  });