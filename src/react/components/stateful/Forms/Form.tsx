import React ,{ Component, ReactElement } from 'react';
import { isTypedObj, isFunc, isPrimative } from '../../../helper/typeCheck';
import { Field } from './Field/Field';
import { Button } from '../../base/Button/Button';

//TODO Make the keys for state settable by the user

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

  private handleFieldset = (child: ReactElement<any, any>, handleChangeFn: Local.VoidFn ) => {
    if (child.type !== 'fieldset') throw new Error(`Expecting a <fieldset> element, got ${child.type} instead`)

    const { children } = child.props;

    if (children == null) throw new Error('Expecting children inside <fieldset>')

    const newChildren = React.Children.map(children,
      (child: ReactElement<any, any>) => {
        if (child.type.name !== 'Field') return child;

        const newProps = {
          ['handleChangeFn']: handleChangeFn
        }
        return React.cloneElement(child, newProps);
    });
    const updatedProps = {
      'children': newChildren
    }
    return React.cloneElement(child, updatedProps);
  }

  private mapChildren = (child: ReactElement<any>, index: number)
    : ReactElement<any, any> | null => {
    const { handleChangeFn } = this.props;
    const handleChangeCheck = handleChangeFn ? handleChangeFn : this.handleFormChangeDefault;

    if (React.isValidElement(child) && child.type !== 'fieldset') {
      const addedProp = {
        ['key']: index,
        ['handleChangeFn']: handleChangeCheck
      }
      const modifiedChild = React.cloneElement(child, addedProp);
      return modifiedChild;
    }

    if (React.isValidElement(child) && child.type === 'fieldset') {
      return this.handleFieldset(child, handleChangeCheck);
    }

    else {
      return null;
    }
  }

  renderChildren = (): Array< ReactElement<any, any> | null > | ReactElement<any, any> | null => {
    const { children, handleChangeFn } = this.props;
    const handleChangeCheck = handleChangeFn ? handleChangeFn : this.handleFormChangeDefault;
    if (children == null) throw new Error('Error expecting children');

    if (Array.isArray(children)) {
      const toRender = (children as ReactElement<any, any>[])
        .map(this.mapChildren);

      return toRender;
    } else {
      if (React.isValidElement(children) && children.type !== 'fieldset') {
        return children
      } else {
        return this.handleFieldset(children, handleChangeCheck);
      }
    }
  }

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
