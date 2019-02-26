import React ,{ Component, ReactElement } from 'react';
import { isTypedObj, isFunc, isPrimative } from '../../../helper/typeCheck';
import { Field } from './Field/Field';
import { Button } from '../../base/Button/Button';

//TODO Make the keys for state settable by the user

const initialState: Local.BasicObj = {
  task: '',
  priority: ''
}

type State = Readonly<typeof initialState>;

export class Form extends Component<Local.FormProps, State> {
  // NOTE this is for when Form is eventually extended to accept a prop for setting up custom/ user-submitted Form input names
  constructor(props: Local.FormProps) {
    super(props);
  }

  readonly state: State = initialState;

  handleFormChangeDefault: Local.VoidFn = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string, value: string } = event.target;
    if (Object.keys(this.state).includes(name)){
      this.setState({
          [name] : value
      } as Pick<State, keyof State>);
      return;
    }
    else {
      throw new Error('Error: Keys in State don\'t match')
    }
  }

  submitForm: Local.VoidFn = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { handleSubmitFn } = this.props;
    handleSubmitFn(this.state);
    this.setState(()=> {
      return initialState
    });
  }

  render = (): ReactElement<any, any> => {
    const { type, id, handleChangeFn } = this.props
    // const toRender = this.renderChildren();
    return (
      <form
        id={`${id ? id: ''}`}
        className={`form ${type ? `form--${type}` : ''}`}
      >
        <fieldset>
          <legend>Task Priority</legend>
          <Field
            type='radio'
            name='priority'
            value='High'
            handleClickFn={ this.handleFormChangeDefault }
            />
          <Field
            type='radio'
            name='priority'
            value='Medium'
            handleClickFn={ this.handleFormChangeDefault }
            />
          <Field
            type='radio'
            name='priority'
            value='Low'
            handleClickFn={ this.handleFormChangeDefault }
            />
        </fieldset>
        <Field
          type='text'
          name='task'
          value={ this.state.task }
          handleChangeFn={ this.handleFormChangeDefault }
          />
        <Button
          type='submit'
          isHTMLInputSubmit={true}
          innerText={null}
          handleClickFn={ this.submitForm }>
        </Button>
      </form>
    )
  }
}
