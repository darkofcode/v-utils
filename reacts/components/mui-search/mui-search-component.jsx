import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import uvStyle from "./style.module.scss";
// import "./mui-input-styles.scss";
// import PropTypes from 'prop-types';
const useStyles = (variant) => {
  let style;
  if (variant === "box") {
    style = {
      borderRadius: "0px",
      background: "rgb(206 206 206)",
      color: "#272727",
    };
  }
  if (variant === "round") {
    style = {
      borderRadius: "4px",
      background: "rgb(206 206 206)",
      color: "#272727",
    };
  }
  if (variant === "naked") {
    style = {
      background: "transparent",
    };
  }
  let wrapper = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    with: "100%",
  };
  wrapper = { ...wrapper, ...style };
  let cross = {
    position: "absolute",
    right: "6px",
    cursor: "pointer",
    fontSize: "0.9rem",
  };
  let input = {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "inherit",
    paddingRight: "24px",
    width: "100%",
  };
  return makeStyles({ wrapper, cross, input });
};

const MuiInput = ({
  width,
  className,
  value = "",
  placeholder,
  variant = "round",
  style,
  inputStyle,
  onChange = () => {},
  onKeyDown = () => {},
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value);
  const classes = useStyles(variant)();
  const handleClearClick = () => {
    setInputValue("");
    onChange({ target: { value: "" } });
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onChange(event);
  };
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <div className={`${className}`} style={{ width, ...style }}>
      <div className={classes.wrapper}>
        <input
          {...otherProps}
          style={{ ...inputStyle }}
          className={` ${uvStyle.formControl} ${classes.input}`}
          placeholder={`${placeholder ? placeholder : ""}`}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
        />
        {!!inputValue && (
          <CloseIcon onClick={handleClearClick} className={classes.cross} fontSize="small" color="inherit" />
        )}
      </div>
    </div>
  );
};
// MuiInput.propTypes = {
// }

export default MuiInput;
