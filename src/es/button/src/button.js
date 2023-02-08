import _extends from '@babel/runtime/helpers/extends';
import './styles/index.css.js';
import React from 'react';

var btnPrefix = 'my-btn';
var sizePrefix = btnPrefix + '-size';
var typePrefix = btnPrefix + '-bg';
var sizeEnum = {
  mini: 'mini',
  small: 'small',
  default: 'default',
  large: 'large'
};
var typeEnum = {
  primary: 'primary',
  success: 'success',
  warn: 'warn'
};
var getSize = function getSize(size) {
  return sizeEnum[size] || sizeEnum.default;
};
var getType = function getType(type) {
  return typeEnum[type] || typeEnum.primary;
};
var Button = function Button(props) {
  var size = props.size,
    type = props.type,
    onClick = props.onClick;
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    onClick: onClick,
    className: "".concat(btnPrefix, " ").concat(sizePrefix + '-' + getSize(size), " ").concat(typePrefix + '-' + getType(type))
  }), props.children);
};

export { Button as default };
