import React ,{ Component, ReactNode, ReactElement, ReactNodeArray } from 'react';
import { isTypedObj, isFunc } from '../helper/typeCheck';
import { Field } from './Field';
import { Button } from './Button';

// FIXME Below isn't DRY, find a way to export standard types and interfaces
type InputTypes = 'text' | 'number' | 'radio' | 'checkbox'

type FieldTemplate = {
  type: InputTypes
  name: string
  noLabel?: boolean
  value?: any
}

interface Props {
  className?: string
  passingTemplate: boolean
  handleSubmitFn: any
  handleChangeFn?: any
  children?: Array<FieldTemplate | Component | ReactElement<any> >
}

const initialState: { [key: string]: any } = {
  task: '',
  priority: ''
}

type State = Readonly<typeof initialState>;

export class Form extends Component<Props, State>{
  constructor(props: any) {
    super(props);
  }
  readonly state: State = initialState;

  renderChildren() {
    const { children, passingTemplate } = this.props;
    if ((children == null) && (passingTemplate === true)) throw new Error('Error, expecting children')
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

  // NOTE Need to be explicit about the event type

  // TODO Also make sure this is updating the state of the applicable <Field/> component

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


  submitForm = () => {
    const { handleSubmitFn } = this.props;
    if (isFunc(handleSubmitFn) !== true) throw new Error('Error!: expecting this.props.handleSubmitFn to be a Function!');
    this.props.handleSubmitFn(this.state); // submit state of the form with the argument of the values inside this.state, note that we passed the handleSubmit function as a property of the Form component
    this.setState(initialState); // reset form
  }

  render() {
    const { children, className, handleSubmitFn } = this.props
    if (!children) throw new Error('Error expecting children')
    const toRender = this.renderChildren();
    return (
      <form
        className={`form ${className}`}
      >
        {toRender}
        <Button
          isHTMLInputSubmit={true}
          innerText={null}
          className='btn--submit'
          handleClickFn={handleSubmitFn}>
        </Button>
      </form>
    )
  }

}
