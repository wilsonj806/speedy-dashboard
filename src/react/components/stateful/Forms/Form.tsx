import React ,{ Component, ReactNode, ReactElement, ReactNodeArray } from 'react';
import { isTypedObj, isFunc } from '../../../helper/typeCheck';
import { Field } from '../../base/Field/Field';
import { Button } from '../../base/Button/Button';

//TODO Make the keys for state settable by the user

// FIXME Below isn't DRY, find a way to export standard types and interfaces
type InputTypes = 'text' | 'number' | 'radio' | 'checkbox'

type FieldTemplate = {
  type    : string
  name    : string
  noLabel?: boolean
  value  ?: any
}

interface Props {
  className     ?: string
  handleSubmitFn : any
  handleChangeFn?: any
  children      ?: Array<FieldTemplate>
}

/* NOTE If <Form/> is to be reused, convert initialState into an Interface and let
the user define the keys of State via Props */
const initialState: { [key: string]: any } = {
  task    : '',
  priority: ''
}

type State = Readonly<typeof initialState>;

export class Form extends Component<Props, State>{
  constructor(props: any) {
    super(props);
  }
  readonly state: State = initialState;

  renderChildren() {
    const { children } = this.props;
    if ((children == null)) throw new Error('Error, expecting children')
    if (children instanceof  Array) {
      const toRender  = children.map((child: any, index: number): ReactNode => {
        if (isTypedObj(child, 'props')) return child;
        const { handleChangeFn } = this.props;
        const { type, name, noLabel } = child
        return (
          <Field
            key={index}
            type={type}
            name={`${name}`}
            value={this.state[`${name}`]}
            noLabel={noLabel}
            handleChangeFn={handleChangeFn ? handleChangeFn : this.handleFormChangeDefault}
          />
        )
      });
      return toRender;
    }
    throw new Error(`Error: Expecting an array of format:
        ReactElement[]
      OR
        an array filled with FieldTemplate objects
    `)
  }

  handleFormChangeDefault = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value}: {name: string, value: string} = event.target;
    if (Object.keys(this.state).includes(name)){
      this.setState({
        [name] : value
      } as Pick<State, keyof State>);
    }
    else {
      throw new Error('Error: Keys in State don\'t match');
    }
  }

  submitForm = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { handleSubmitFn } = this.props;
    if (isFunc(handleSubmitFn) !== true) throw new Error('Error!: expecting this.props.handleSubmitFn to be a Function!');
    handleSubmitFn(this.state);
    this.setState(initialState);
  }

  render() {
    const { children, className } = this.props
    if (!children) throw new Error('Error expecting children')
    const toRender = this.renderChildren();
    return (
      <form
        className={`form ${className}`}
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
