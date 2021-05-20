import React from "react";
// import uvStyle from "./mui-input-styles.module.scss";
import uvStyle from "../formik-elm-styles.module.scss";
import PropTypes from "prop-types";
import { isMobileScreen } from "../../../../js-functions/window/is-mobile-screen";
import Input from "../../autosize-textarea/autosize-textarea";
import cStyle from "./style.module.scss";

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
  getRef,
  minHeight,
  columnOnMobile = true,
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
          <span className={`${columnOnMobile ? uvStyle.mWrapper : ""}`} style={{ width: getLabelWidth }}>
            {label}
          </span>
        )}
        <Input
          {...otherProps}
          {...field}
          minHeight={minHeight}
          style={{ width: getInputWidth }}
          className={`${cStyle.textArea}  ${inputClassName}  ${fieldError ? "input-error" : ""}`}
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
