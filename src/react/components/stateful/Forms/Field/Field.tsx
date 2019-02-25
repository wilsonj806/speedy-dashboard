import React ,{ Component, ReactElement } from 'react';
import { capitalizeString } from '../../../../helper/helperUtils';


export const Field = (props: Local.FieldProps): ReactElement<any, any> => {
    const { type, name, noLabel, handleChangeFn, value } = props;
    if (handleChangeFn == null) throw new Error(`
      Error expecting a Function for handleChangeFn, got ${handleChangeFn} instead
    `)
    if (noLabel !== true) {
      const checkType = (type === 'radio') ? value : name;
      const labelText = capitalizeString(checkType!);
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
            onChange={handleChangeFn}
          />
        </>
      )
    }
    return(
        <input
          type={`${type}`}
          name={`${name}`}
          value={value}
          onChange={handleChangeFn}
        />
    )
}
