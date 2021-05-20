import React from "react";
// import uvStyle from "./mui-checkbox-styles.module.scss";
import uvStyle from "../formik-elm-styles.module.scss";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import { isMobileScreen } from "../../../../js-functions/window/is-mobile-screen";

const MuiCheckBox = ({
  field,
  checked,
  label,
  labelWidth = "",
  inputWidth = "",
  className,
  style,
  width,
  columnOnMobile = true,
  justInput = false,
  ...otherProps
}) => {
  // console.log({ field });
  const getWidth = isMobileScreen() ? (justInput ? width : "100%") : width;
  const getInputWidth = inputWidth;
  const getLabelWidth = isMobileScreen() ? "100%" : labelWidth;
  return (
    <div
      className={` ${uvStyle.inputWrapper} ${className} ${columnOnMobile ? uvStyle.mWrapper : ""}`}
      style={{ ...style, width: getWidth }}
    >
      {justInput && (
        <span
          className={`${columnOnMobile ? uvStyle.mWrapper : ""}`}
          style={{ width: `calc(${getLabelWidth} - 12px)` }}
        >
          {label}
        </span>
      )}
      <Checkbox
        className={`${uvStyle.input}`}
        style={{ width: getInputWidth, height: getInputWidth }}
        color="default"
        {...field}
        {...otherProps}
        checked={field.value ? true : false}
      />
    </div>
  );
};

MuiCheckBox.propTypes = {
  label: PropTypes.string,
  labelWidth: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
};
export default MuiCheckBox;
