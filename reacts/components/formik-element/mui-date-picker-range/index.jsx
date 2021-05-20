import React from "react";
import uvStyle from "../formik-elm-styles.module.scss";
import DatePicker from "../../mui-date-picker-range";
import { isMobileScreen } from "../../../../js-functions/window/is-mobile-screen";

const MuiDatePicker = ({
  includeLabelError = true,
  form = {},
  field = {},
  label,
  labelWidth = "",
  inputWidth = "",
  className,
  inputClassName,
  style,
  width,
  columnOnMobile = true,
  justInput,
  ...otherProps
}) => {
  const { errors = {} } = form;

  const fieldError = !!errors[field.name];
  const getWidth = isMobileScreen() ? (justInput ? width : "100%") : width;
  const getInputWidth = isMobileScreen() ? "100%" : inputWidth;
  const getLabelWidth = isMobileScreen() ? "100%" : labelWidth;
  // console.log("from formik", { errors });
  return (
    <div className={`${uvStyle.wrapper} ${className}`} style={{ ...style, width: getWidth }}>
      <div className={` ${uvStyle.inputWrapper} ${columnOnMobile ? uvStyle.mWrapper : ""}`}>
        {justInput && (
          <span className={`${columnOnMobile ? uvStyle.mWrapper : ""}`} style={{ width: getLabelWidth }}>
            {label}
          </span>
        )}
        <DatePicker
          inputClassName={`${inputClassName} ${fieldError ? "input-error" : ""}`}
          style={{ width: getInputWidth }}
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

export default MuiDatePicker;
