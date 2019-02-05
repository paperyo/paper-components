import * as React from 'react';
import styled from '@emotion/styled';

type buttonProps = {
  size: string;
  disabled?: boolean;
};

const sizes = {
  sm: '5px 10px',
  md: '10px 20px',
  lg: '20px 40px',
};

const fonts = {
  sm: '10px',
  md: '15px',
  lg: '25px',
};

const Button = styled.button<buttonProps>`
  border-radius: 6px;
  background: tomato;
  color: white;

  background: ${({ disabled }) => (disabled ? 'gray' : 'tomato')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  font-size: ${({ size }) => fonts[size]};
  padding: ${({ size }) => sizes[size]};
`;

Button.defaultProps = {
  size: 'md',
};

export default Button;
