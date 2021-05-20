import React from "react";
import uvStyle from "../formik-elm-styles.module.scss";
import { isMobileScreen } from "../../../../js-functions/window/is-mobile-screen";
import Input from "../../mui-input/mui-input-component";

const MuiInput = ({
  field = {},
  form = {},
  label,
  labelWidth = "",
  inputWidth = "",
  className = "",
  inputClassName = "",
  includeLabelError = true,
  style,
  width,
  justInput = false,
  columnOnMobile = true,
  onKeyEnter = () => {},
  disabled,
  ...otherProps
}) => {
  const { dirty, errors = {} } = form;
  const fieldError = dirty && !!errors[field.name];

  const getWidth = isMobileScreen() ? (justInput ? width : "100%") : width;
  const getInputWidth = isMobileScreen() ? "100%" : inputWidth;
  const getLabelWidth = isMobileScreen() ? "100%" : labelWidth;
  // console.log("from input formik", { innerref });

  return (
    <div className={`${uvStyle.wrapper} ${className}`} style={{ ...style, width: getWidth }}>
      <div className={` ${uvStyle.inputWrapper} ${columnOnMobile ? uvStyle.mWrapper : ""}`}>
        {!justInput && (
          <span className={`${columnOnMobile ? uvStyle.label : ""}`} style={{ width: getLabelWidth }}>
            {label}
          </span>
        )}
        <Input
          {...otherProps}
          {...field}
          disabled={disabled}
          onKeyEnter={onKeyEnter}
          style={{ width: getInputWidth }}
          className={`form-control ${inputClassName}  ${fieldError ? "input-error" : ""}`}
        />
      </div>
      <div className={`${uvStyle.inputWrapper} `}>
        <div style={{ width: getLabelWidth }} className={`${uvStyle.invisible}`}></div>
        {fieldError && includeLabelError && <div className={` label-error`}>{errors[field.name]}</div>}
      </div>
    </div>
  );
};

export default MuiInput;
