import React from "react";
import uvStyle from "../formik-elm-styles.module.scss";
import { isMobileScreen } from "../../../../js-functions/window/is-mobile-screen";
import NumberFormat from "../../mui-input-number-format";
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
  // decimalScale = 2,
  // fixedDecimalScale = true,
  thousandSeparator = true,
  columnOnMobile = true,
  ...otherProps
}) => {
  const { dirty, errors = {} } = form;
  const fieldError = dirty && !!errors[field.name];

  const getWidth = isMobileScreen() ? (justInput ? width : "100%") : width;
  const getInputWidth = isMobileScreen() ? "100%" : inputWidth;
  const getLabelWidth = isMobileScreen() ? "100%" : labelWidth;
  // console.log("input number");

  return (
    <div className={`${uvStyle.wrapper} ${className}`} style={{ ...style, width: getWidth }}>
      <div className={` ${uvStyle.inputWrapper} ${columnOnMobile ? uvStyle.mWrapper : ""}`}>
        {!justInput && (
          <span className={`${columnOnMobile ? uvStyle.mWrapper : ""}`} style={{ width: getLabelWidth }}>
            {label}
          </span>
        )}
        <NumberFormat
          {...otherProps}
          {...field}
          // decimalScale={decimalScale}
          // fixedDecimalScale={fixedDecimalScale}
          thousandSeparator={thousandSeparator}
          style={{ width: getInputWidth }}
          className={`form-control ${inputClassName}  ${fieldError ? "input-error" : ""}`}
        />
        {/* <Input
          {...otherProps}
          {...field}
          onKeyEnter={onKeyEnter}
          style={{ width: getInputWidth }}
          className={`form-control ${inputClassName}  ${fieldError ? "input-error" : ""}`}
        /> */}
      </div>
      <div className={`${uvStyle.inputWrapper} `}>
        <div style={{ width: getLabelWidth }} className={`${uvStyle.invisible}`}></div>
        {fieldError && includeLabelError && <div className={` label-error`}>{errors[field.name]}</div>}
      </div>
    </div>
  );
};

export default MuiInput;
