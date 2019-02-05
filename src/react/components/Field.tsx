import React ,{ Component, ReactNode, ReactChild } from 'react';

type InputTypes = 'text' | 'number' | 'radio' | 'checkbox'


interface Props {
  type: InputTypes
  name: string
  handleChangeFn?: any
  noLabel?: boolean
  value?: any
}

// TODO Figure out why submit buttons don't get a label even if you specify it in Properties
const initialState = {
  value: ''
}

type State = Readonly<typeof initialState>;

export class Field extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }
  readonly state: State = initialState;

  handleChangeDefault = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: any } = event.target;
    this.setState({
      'value' : value
    });
  }

  capitalizeString(string: string): string {
    if (string == null) throw new Error('Expecting a string input')
    const regex = /\b[a-z]/i;
    const match = string.match(regex);
    if (match == null) throw new Error('Error expecting a non-zero length string')
    const capitalizedLetter = match[0].toUpperCase();
    const capitalizedString = string.replace(regex, capitalizedLetter);
    return capitalizedString;
  }


  render() {
    const { type, name, noLabel, handleChangeFn } = this.props;
    const { value } = this.state;
    const handleChange = handleChangeFn || this.handleChangeDefault;
    if (noLabel !== true) {
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
            onChange={handleChange}
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
          onChange={handleChange}
        />
      </>
    )
  }
}