import React ,{ Component, ReactElement } from 'react';
import { capitalizeString } from '../../../../helper/helperUtils';


export const Field = (props: Local.FieldProps): ReactElement<any, any> => {
    const {
      type,
      name,
      noLabel,
      handleChangeFn,
      handleClickFn,
      value,
      required
    } = props;
    if (handleChangeFn == null && handleClickFn == null) throw new Error(`
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
            required={required ? required : false}
            value={value}
            onClick={handleClickFn ? handleClickFn : undefined}
            onChange={handleChangeFn ? handleChangeFn : undefined}
            />
        </>
      )
    }
    return(
      <input
        required={required ? required : false}
        type={`${type}`}
        name={`${name}`}
        value={value}
        onClick={handleClickFn ? handleClickFn : undefined}
          onChange={handleChangeFn ? handleChangeFn : undefined}
        />
    )
}
