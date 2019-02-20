import React, { Component, ReactElement } from 'react';

import { Button } from '../base/Button/Button';

import './Comp-modifiers.css';

export const Info = (props: Local.InfoButtonProps): ReactElement<any, any> => {
    const { handleDisplayFn } = props;
    return (
      <Button
        type='page-info'
        innerText='?'
        target='HELP'
        handleClickFn={handleDisplayFn}
      />
    )
}
