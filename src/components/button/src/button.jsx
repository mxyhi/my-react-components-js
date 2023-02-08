import './styles/index.css';
import React from 'react';

const btnPrefix = 'my-btn';
const sizePrefix = btnPrefix + '-size';
const typePrefix = btnPrefix + '-bg';

const sizeEnum = {
  mini: 'mini',
  small: 'small',
  default: 'default',
  large: 'large',
};

const typeEnum = {
  primary: 'primary',
  success: 'success',
  warn: 'warn',
};

const getSize = size => sizeEnum[size] || sizeEnum.default;

const getType = type => typeEnum[type] || typeEnum.primary;

const Button = props => {
  const { size, type, onClick, className } = props;
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${btnPrefix} ${sizePrefix + '-' + getSize(size)} ${
        typePrefix + '-' + getType(type)
      } ${className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
