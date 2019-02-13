import React, { Component, ReactNode, ReactElement } from 'react';

import { Button } from '../../../base/Button/Button';
import { Modal } from '../../../presentational/Modal/Modal';


interface Props {
  children?: ReactElement<any>
}

interface BasicObj { [key: string]: any}

const initialState: BasicObj = {
  renderModals: {
    demo: false,
    basic: false,
  }
}

type State = Readonly<typeof initialState>

// NOTE In terms of order, put the <Modal/> component first
export class MultipleSupport extends Component<Props, State> {
  readonly state: State = initialState;
  constructor(props: any) {
    super(props)
  }

  sayHi = () => console.log('hi');

  toggleState = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) throw new Error('wrong type');
    const targetModalClass = ['modal-wrapper', 'btn--close'];
    const { classList, dataset, id } = event.target;
    const { target } = dataset

    const classCheck = (classList.contains(targetModalClass[0]) || classList.contains(targetModalClass[1]));

    if ( classCheck === true ) {
      this.setState((prevState: State) => ({
        renderModals: {
          [id]: !prevState.renderModals[id]
        }}));
      return;
    } else if (classCheck === false && target){
      if (typeof target !== 'string') throw new Error('Error expecting target to be a string');
      this.setState((prevState: State) => ({
        renderModals: {
          [target]: !prevState.renderModals[target]
      }}));
      return;
    }
  }

  render() {
    const { children } = this.props;
    const styling = {
      background: 'pink',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center',
    };

    /* const updatedChild = React.Children.map(children, (child: any) =>{
      return React.cloneElement(child, { updateParentState: this.toggleState })
    }); */
    const demo = ((this.state.renderModals.demo === true) ? (
      <Modal
        key={0}
        id='demo'
        type='demo'
        headerText='This is a Demo modal that is expected to work'
        children='This modal should work'
        handleCloseFn={this.toggleState}
      />
      ) : null);
    const basic = ((this.state.renderModals.basic === true) ? (
      <Modal
        key={1}
        id='basic'
        type='basic'
        headerText='This is a Basic modal that is expected to work'
        handleCloseFn={this.toggleState}
      >
        <p>This file holds the text for the various sections of the page. Ideally this would be handled via asynchronous import from an external file, but that's slightly beyond what I'm trying to accomplish for v0.5.0. It probably will be added in at some point though as copy and pasting in the text into the relevant sections is not at all efficient.</p>
      </Modal>
      ) : null);
      /* const toRender2= ((this.state.renderModals.basic === true) ? (updatedChild) : null); */

    return(
      <>
        {[demo, basic]}
        <div
          style={styling}
        >
          <Button
            innerText='Toggle Demo'
            target='demo'
            handleClickFn={this.toggleState}
            />
          <Button
            innerText='Toggle Basic'
            target='basic'
            handleClickFn={this.toggleState}
          />
        </div>
      </>
    )
  }
}