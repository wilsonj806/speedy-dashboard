import { Component, ReactNode, ReactChild } from 'react';

/* NOTE for integrating with <App/> need to pass a function in as a property like so:
<Form handleSubmit={this.handleSubmit} /> */
export class Form extends Component<any, any>{  
  constructor(props: any) { //https://reactjs.org/docs/react-component.html#constructor
    super(props); // needs to be called otherwise this.props will be undefined

    this.initialState = {
        name: '',
        job: ''
    };

    this.state = this.initialState;
  }

  handleChange = (event: any) => { // Analogous to using form.addEventListener('change',handleChange)
    const {name, value} = event.target;

    this.setState({ //function/ method to set the State of a UI element
        [name] : value
    });
  }
  submitForm = () => {
    this.props.handleSubmit(this.state); // submit state of the form with the argument of the values inside this.state, note that we passed the handleSubmit function as a property of the Form component
    this.setState(this.initialState); // reset form
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
