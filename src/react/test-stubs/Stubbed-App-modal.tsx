import React, { Component, ReactNode, ReactElement } from 'react';

import { Button } from '../components/Button';
import { Modal } from '../components/Modal';


interface Props {
  children?: ReactElement<any>
  renderChild?: boolean
}

const initialState = {
  renderChild: false
}

type State = Readonly<typeof initialState>

// NOTE In terms of order, put the <Modal/> component first
export class StubbedApp extends Component<Props, any> {
  readonly state: State = initialState;
  constructor(props: any) {
    super(props)
    if (this.props.renderChild) {
      this.setState({renderChild: this.props.renderChild})
    }
  }

  componentWillUpdate = (nextProps: Props) => {
    if (nextProps.children == null) {
      this.setState({renderChild: initialState.renderChild});
    }
  }

  sayHi = () => console.log('hi');

  toggleState = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    this.setState((prevState: State) => ({renderChild: !prevState.renderChild}))
  }

  render() {
    const { children } = this.props;
    const styling = {
      background: 'pink',
      height: '100vh',
      width: '100vw'
    };

    const updatedChild = React.Children.map(children, (child: any) =>{
      return React.cloneElement(child, { updateParentState: this.toggleState })
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