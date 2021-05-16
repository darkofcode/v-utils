import React from "react";
// import uvStyle from "./mui-input-styles.module.scss";
import uvStyle from "../formik-elm-styles.module.scss";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { isMobileScreen } from "../../../../js-functions/window/is-mobile-screen";

const MuiInput = ({
  field = {},
  form = {},
  label,
  labelWidth = "",
  inputWidth = "",
  className,
  includeLabelError = true,
  style,
  width,
  inputRef,
  columnOnMobile = true,
  ...otherProps
}) => {
  const { dirty, errors = {} } = form;
  const fieldError = dirty && !!errors[field.name];

  const getWidth = isMobileScreen() ? "100%" : width;
  const getInputWidth = isMobileScreen() ? "100%" : inputWidth;
  const getLabelWidth = isMobileScreen() ? "100%" : labelWidth;
  return (
    <div className={`${uvStyle.wrapper} ${className}`} style={{ ...style, width: getWidth }}>
      <div className={` ${uvStyle.inputWrapper}  ${columnOnMobile ? uvStyle.mWrapper : ""}`}>
        <span className={`${columnOnMobile ? uvStyle.mWrapper : ""}`} style={{ width: getLabelWidth }}>
          {label}
        </span>
        <TextField
          style={{ width: getInputWidth }}
          inputRef={inputRef}
          className={`${uvStyle.input} `}
          error={fieldError}
          {...field}
          {...otherProps}
        />
      </div>
      <div className={`${uvStyle.inputWrapper} `}>
        <div style={{ width: getLabelWidth }} className={`${uvStyle.invisible}`}></div>
        {fieldError && includeLabelError && <div className={` label-error`}>{errors[field.name]}</div>}
      </div>
    </div>
  );
};

MuiInput.propTypes = {
  label: PropTypes.string,
  labelWidth: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
};
export default MuiInput;
