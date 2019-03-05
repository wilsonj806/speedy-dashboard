import React, { Component, ReactElement } from 'react';

import { Button } from '../component.lib';

import './Comp-modifiers.css';

export const Info = (props: Local.InfoButtonProps): ReactElement<any, any> => {
    const { handleDisplayFn } = props;
    return (
      <Button
        type='page-info'
        innerText='?'
        target='INFO'
        handleClickFn={handleDisplayFn}
      />
    )
}
