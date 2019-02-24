import React ,{ Component, ReactElement } from 'react';
import { isTypedObj, isFunc, isPrimative } from '../../../helper/typeCheck';
import { Field } from './Field/Field';
import { Button } from '../../base/Button/Button';
import { any } from 'prop-types';

//TODO Make the keys for state settable by the user

// REVIEW Technically don't need State for Field so figure out if its worth having at all

const initialState: Local.BasicObj = {
  ['task']     : '',
  ['priority'] : ''
}

type State = Readonly<typeof initialState>;

export class Form extends Component<Local.FormProps, State> {
  // NOTE this is for when Form is eventually extended to accept a prop for setting up custom/ user-submitted Form input names
  constructor(props: Local.FormProps) {
    super(props);
  }

  readonly state: State = initialState;

  renderChildren = (): (ReactElement<any, any> | null)[] | ReactElement<any, any> | null => {
    const { children, handleChangeFn } = this.props;
    if (children == null) throw new Error('Error expecting children');
    if (Array.isArray(children)) {
      const toRender = (children as Local.ChildrenArray).map((child: Local.FieldTemplate | ReactElement<any>, index: number): ReactElement<any, any> | null=> {
        if (React.isValidElement(child)) return child;

        if (isTypedObj(child, 'name') && isTypedObj(child, 'type')) {
          const { type, name, noLabel } = child as Local.FieldTemplate;
          return (
            <Field
              key={index}
              type={type}
              name={name}
              noLabel={noLabel ? noLabel : false}
              value={this.state[`${name}`]}
              handleChangeFn={handleChangeFn ? handleChangeFn : this.handleFormChangeDefault}
            />
            )
        } else {
          return null
        }
      });
      return toRender;
    } else {
      if (React.isValidElement(children)) return children;
      if (isTypedObj(children, 'name') && isTypedObj(children, 'type')) {
        const { type, name, noLabel } = children as Local.FieldTemplate;
        return (
          <Field
            type={type}
            name={name}
            value={this.state[`${name}`]}
            noLabel={noLabel ? noLabel : false}
            handleChangeFn={handleChangeFn ? handleChangeFn : this.handleFormChangeDefault}
          />
        )
      }
      return null;
    }
  }

  handleFormChangeDefault = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string, value: string } = event.target;
    if (Object.keys(this.state).includes(name)){
      this.setState({
        [name] : value
      } as Pick<State, keyof State>);
    }
    else {
      throw new Error('Error: Keys in State don\'t match');
    }
  }

  submitForm: Local.VoidFn = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { handleSubmitFn } = this.props;
    handleSubmitFn(this.state);
    this.setState(initialState);
  }

  render = (): ReactElement<any, any> => {
    const { children, type } = this.props
    if (!children) throw new Error('Error expecting children')
    const toRender = this.renderChildren();
    return (
      <form
        className={`form ${type ? `form--${type}` : ''}`}
      >
        {toRender}
        <Button
          type='submit'
          isHTMLInputSubmit={true}
          innerText={null}
          handleClickFn={this.submitForm}>
        </Button>
      </form>
    )
  }
}
