import React ,{ Component, ReactNode, ReactChild } from 'react';

/* NOTE for integrating with <App/> need to pass a function in as a property like so:
<Form handleSubmit={this.handleSubmit} /> */

/* NOTE  below implementation is for the actual form */


/* const initialState = {
  priority: 0,
  task: ''
} */

const initialState = {
  name: '',
  job: ''
}

type State = Readonly<typeof initialState>;

export class Form extends Component<any, State>{
  constructor(props: any) { //https://reactjs.org/docs/react-component.html#constructor
    super(props); // needs to be called otherwise this.props will be undefined
  }
  readonly state: State = initialState;

  // NOTE Need to be explicit about the event type

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // Analogous to using form.addEventListener('change',handleChange)
    const {name, value}: {name: string, value: any} = event.target;
    if (Object.keys(this.state).includes(name)){
      this.setState({ //function/ method to set the State of a UI element
        [`${name}`] : value
      } as Pick<State, keyof State>);
    }
    else {
      throw new Error('keys don\'t match');
    }
  }
  submitForm = () => {
    this.props.handleSubmit(this.state); // submit state of the form with the argument of the values inside this.state, note that we passed the handleSubmit function as a property of the Form component
    this.setState(initialState); // reset form
  }

  render() {
    const { name, job } = this.state;

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

}
