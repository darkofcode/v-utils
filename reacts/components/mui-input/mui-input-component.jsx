import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import "./mui-input-styles.scss";
// import PropTypes from 'prop-types';
const useStyles = (variant) => {
  let style;
  if (variant === "box") {
    style = {
      borderRadius: "0px",
    };
  }
  if (variant === "round") {
    style = {
      borderRadius: "4px",
    };
  }
  if (variant === "naked") {
    style = {
      background: "transparent",
      boxShadow: "none",
      color: "inherit",
    };
  }
  if (variant === "nothing") {
    style = {
      background: "transparent",
      boxShadow: "none",
      color: "inherit",
      borderBottom: "none",
    };
  }
  return makeStyles({ root: style });
};

const MuiInput = ({
  onKeyEnter = () => {},
  width,
  className,
  placeholder,
  variant = "round",
  style,
  getRef,
  disabled,
  autoComplete = "off",
  ...otherProps
}) => {
  const classes = useStyles(variant)();
  const elm = useRef(null);
  const handleKeyDown = (e) => {
    const k = e.keyCode;
    if (k === 13) {
      onKeyEnter(true);
    }
  };

  useEffect(() => {
    if (getRef) getRef(elm);
  }, []); //eslint-disable-line

  return (
    <input
      {...otherProps}
      onKeyDown={handleKeyDown}
      ref={elm}
      // name={name}
      // value={_value}
      // onChange={handleChange}
      autoComplete={autoComplete}
      style={{ width, ...style }}
      disabled={disabled}
      className={classes.root + ` ${disabled ? "inputDisabled" : ""} form-control ${className ? className : ""} `}
      placeholder={`${placeholder ? placeholder : ""}`}
    />
  );
};
// MuiInput.propTypes = {
// }

export default MuiInput;
