import React ,{ Component, ReactNode, ReactChild } from 'react';

type InputTypes = 'text' | 'number' | 'radio' | 'button' | 'submit' | 'checkbox'

interface Props {
  type: InputTypes,
  name: string,
  eventHandler?: any,
  generateLabel?: boolean
}


const initialState = {
  value: ''
}

type State = Readonly<typeof initialState>;


export class Field extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  readonly state: State = initialState;

  capitalizeString(string: string): string {
    if (string === null) throw new Error('Expecting string not to be null')
    const regex = /\b[a-z]/i;
    const match = string.match(regex);
    if (match == null) throw new Error('Error expecting the input string to have a length greater than 0')
    const capitalizedLetter = match[0].toUpperCase();
    const capitalizedString = string.replace(regex, capitalizedLetter);
    return capitalizedString;
  }

  render() {
    const { type, name, eventHandler, generateLabel } = this.props;
    const { value, } = this.state;
    if (generateLabel === true) {
      const labelText = this.capitalizeString(name);
      return(
        <>
          <label
            htmlFor={`${name}`}
          >
            {labelText}
          </label>
          <input
            type={`${type}`}
            name={`${name}`}
            value={value}
            onChange={eventHandler}
          />
        </>
      )
    }
    return(
      <>
        <input
          type={`${type}`}
          name={`${name}`}
          value={value}
          onChange={eventHandler}
        />
      </>
    )
  }
}