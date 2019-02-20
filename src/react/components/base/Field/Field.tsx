import React ,{ Component, ReactNode, ReactChild } from 'react';
import { capitalizeString } from '../../../helper/helperUtils';

const initialState = {
  value: ''
}

type State = Readonly<typeof initialState>;

export class Field extends Component<Local.FieldProps, State> {
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

  render() {
    const { type, name, noLabel, handleChangeFn, value } = this.props;
    const handleChange = handleChangeFn || this.handleChangeDefault;
    if (noLabel !== true) {
      const labelText = capitalizeString(name);
      return(
        <>
          <label
            key={0}
            htmlFor={`${name}`}
          >
            {labelText}
          </label>
          <input
            key={1}
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