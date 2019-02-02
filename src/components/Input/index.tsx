import React from 'react';
import styled from '@emotion/styled';

import defaultTheme from '../../themes/default';
import InputFieldProps from './types';


const Input = styled.input<InputFieldProps>`
  height: 30px;
  outline: none;
  padding: 0px;
  font-family: Lato;
  background: none;
  border: none;

  color: ${({ disabled }) => (disabled ? 'lightgrey' : 'grey')};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};
`;

const Field = styled.fieldset<InputFieldProps>`
  margin: 10px;
  padding: 8px 5px;
  border-radius: 4px;
  transition: all 0.8s, transform 0.2s, border 0.2s;

  border: ${({ disabled }) => (disabled ? '1px solid lightgrey' : '1px none lightgrey')};

  background: ${({ disabled }) => (disabled ? 'rgba(245, 245, 245)' : 'white')};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'initial')};

  transform: ${({ disabled }) => (disabled ? 'translateY(1px)' : 'none')};

  box-shadow: ${({ status, theme, disabled }) => {
    if (disabled) return 'none';

    const color = theme[status] || defaultTheme[status] || '0, 0, 0';
    return `0 2px 2px rgba(${color},0.45), 1px 0px 2px rgba(${color},.25), -1px 0px 1px rgba(${color},.25)`;
  }};
`;

const Label = styled.label<InputFieldProps>`
  transition: 0.1s;
  font-family: Lato;
  font-size: 12px;
  margin: 0px 10px;
  padding: 0px 10px 0px 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  pointer-events: none;

  color: rgba(
    ${({ disabled, status, theme }) => {
    if (disabled) return '0, 0, 0, .3';

    return theme[status] || defaultTheme.default;
  }}
  );
`;

const InputField = (props) => {
  const {
    status, placeholder, label, disabled,
  } = props;

  return (
    <Field status={status} disabled={disabled}>
      <Label status={status} disabled={disabled}>
        {label}
      </Label>

      <Input {...props} placeholder={placeholder} />
    </Field>
  );
};

export default InputField;
