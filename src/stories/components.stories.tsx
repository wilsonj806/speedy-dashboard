import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from '../react/components/Card';

storiesOf('Low Level Component/ Card', module)
  .add('basic card', () => {
    return (
      <Card>
        <p>hi</p>
      </Card>
)});