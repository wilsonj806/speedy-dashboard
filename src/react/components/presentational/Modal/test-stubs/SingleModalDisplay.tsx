import React, { Component, ReactNode, ReactElement } from 'react';

import { Button } from '../../../base/Button/Button';
import { Modal } from '../../../presentational/Modal/Modal';

// NOTE In terms of order, put the <Modal/> component first

const initialState = {
  renderChild: false
}

type State = Readonly<typeof initialState>

export class StubbedApp extends Component<Props, any> {
  readonly state: State = initialState;
  constructor(props: any) {
    super(props)
    if (this.props.renderChild) {
      this.setState({renderChild: this.props.renderChild})
    }
  }

  sayHi = () => console.log('hi');

// NOTE the below assumes that toggleState is sent to a button element for toggling the thing

  toggleState = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) throw new Error('wrong type');
    const targetModalClass = ['.modal-wrapper', '.btn--close']
    const { classList } = event.target;
    if ( classList.contains(targetModalClass[0]) || classList.contains(targetModalClass[1])) {
      this.setState((prevState: State) => ({renderChild: !prevState.renderChild}))
    } else{
      this.setState((prevState: State) => ({renderChild: !prevState.renderChild}))
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

    const updatedChild = React.Children.map(children, (child: any) =>{
      return React.cloneElement(child, { handleCloseFn: this.toggleState })
    });
/*     const toRender = ((this.state.renderChild === true) ? (
      <Modal
      type='demo'
      headerText='This is a sample modal that is expected to work'
      children='This modal should work'
      updateParentState={this.toggleState}
      />
      ) : null); */
      const toRender2= ((this.state.renderChild === true) ? (updatedChild) : null);

    return(
      <>
        {toRender2}
        <div
          style={styling}
        >
          <Button
            innerText='Toggle state'
            handleClickFn={this.toggleState}
          />
        </div>

      </>
    )
  }
}

interface Props {
  children?: ReactElement<any>
  renderChild?: boolean
}
