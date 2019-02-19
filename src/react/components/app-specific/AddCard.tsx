import React, { Component, ReactElement } from 'react';

import { Heading } from '../base/Heading/Heading';
import { Button } from '../base/Button/Button';

import { Card } from '../presentational/Card/Card';

import './Comp-modifiers.css';

export class AddCard extends Component<Local.AddCardProps> {

  render = (): ReactElement<any, any> => {
    const { handleAddFn } = this.props;
    const childrenObj = {
      header: (<Heading type='ind-add' headingLvl={2}>Add Cards In!</Heading>),
      content: (null),
      action: (
        <Button
          type='add-cards'
          innerText='&#43;'
          target='ADD'
          handleClickFn={handleAddFn}
        />
        )
    }
    return (
      <Card
        type='add-cards'
      >
        {childrenObj}
      </Card>
    )
  }
}