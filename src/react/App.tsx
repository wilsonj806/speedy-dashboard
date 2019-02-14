import React, { Component } from 'react';

interface BasicObj {
  [key: string] : any
}

const initialState: BasicObj = {
  renderModal: '',
  renderCard: ''
}

type State = Readonly<typeof initialState>;

// NOTE In terms of order, put the <Modal/> component first
export class App extends Component<any, State> {
  render() {
    return(
      <div>
        just starting this don't mind me
      </div>
    )
  }
}