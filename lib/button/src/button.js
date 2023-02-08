'use strict';

var _extends = require('@babel/runtime/helpers/extends');
require('./styles/index.css.js');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
    onClick = props.onClick,
    className = props.className;
  return /*#__PURE__*/React__default["default"].createElement("button", _extends__default["default"]({}, props, {
    onClick: onClick,
    className: "".concat(btnPrefix, " ").concat(sizePrefix + '-' + getSize(size), " ").concat(typePrefix + '-' + getType(type), " ").concat(className)
  }), props.children);
};

module.exports = Button;
