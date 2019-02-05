import React ,{ Component, ReactNode, ReactChild } from 'react';
import { isTypedObj, isPrimative } from '../helper/typeCheck';
import { Field } from './Field';

/* NOTE for integrating with <App/> need to pass a function in as a property like so:
<Form handleSubmit={this.handleSubmit} /> */

/* NOTE  below implementation is for the actual form */


/* const initialState = {
  priority: 0,
  task: ''
} */

// FIXME Below isn't DRY, find a way to export standard types and interfaces
type InputTypes = 'text' | 'number' | 'radio' | 'checkbox'

type FieldTemplate = {
  type: InputTypes
  name: string
  handleChangeFn?: any
  noLabel?: boolean
  value?: any
}

interface Props {
  passingTemplate: boolean
  handleSubmitFn: any
  children?: ReactNode | FieldTemplate[] | ReactNode[]
}

const initialState = {
  name: '',
  job: ''
}

type State = Readonly<typeof initialState>;

export class Form extends Component<Props, State>{
  constructor(props: any) { //https://reactjs.org/docs/react-component.html#constructor
    super(props); // needs to be called otherwise this.props will be undefined
  }
  readonly state: State = initialState;

  checkChildren() {
    const { children, passingTemplate } = this.props;
    if (!children && (passingTemplate === true)) throw new Error('Error, expecting children')
    if ((isPrimative(children) === false) && (children != null) && (children instanceof  Array)) {
      const areExpectedType = children.every((child: any): boolean => {
        return (isTypedObj(child, 'type'));
      })
      console.log(areExpectedType);
    }
  }

  // NOTE Need to be explicit about the event type

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Analogous to using form.addEventListener('change',handleChange)
    const {name, value}: {name: string, value: any} = event.target;
    if (Object.keys(this.state).includes(name)){
      this.setState({ //function/ method to set the State of a UI element
        name : value
      } as Pick<State, keyof State>);
    }
    else {
      throw new Error('keys don\'t match');
    }
  }

  submitForm = () => {
    this.props.handleSubmitFn(this.state); // submit state of the form with the argument of the values inside this.state, note that we passed the handleSubmit function as a property of the Form component
    this.setState(initialState); // reset form
  }

  render() {
    const { children } = this.props
    const { name, job, } = this.state;
    if (!children) {
    return (
        <form>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange} />
            <label>Job</label>
            <input
                type="text"
                name="job"
                value={job}
                onChange={this.handleChange}/>
            <input
              type="button"
              value="Submit"
              onClick={this.submitForm} />
        </form>
    );
    }
    this.checkChildren();
    return (
      <form>
        {children}
      </form>
    )
  }

}
