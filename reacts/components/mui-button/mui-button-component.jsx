import React from "react";
import uvStyle from "./mui-button-styles.module.scss";
import Button from "@material-ui/core/Button";
import Loading from "@material-ui/core/CircularProgress";
import { isMobileScreen } from "../../../js-functions/window/is-mobile-screen";

const getSize = (size) => {
  if (size === "small") {
    return {
      height: "29px",
      fontSize: "0.8rem",
    };
  } else {
    return {};
  }
};
const getPosition = (size) => {
  if (size === "small") {
    return {
      position: "relative",
      // top: "-2px",
    };
  } else {
    return {};
  }
};
const getClassName = (type) => {
  switch (type) {
    case "error":
    case "danger":
      return `${uvStyle.btnError}`;
    case "warning":
      return `${uvStyle.btnWarning}`;
    case "info":
      return `${uvStyle.btnInfo}`;
    default:
      return `${uvStyle.btnSuccess}`;
  }
};
const getText = (fullText, textOnMobile) => {
  if (textOnMobile) {
    if (isMobileScreen()) {
      return textOnMobile;
    } else {
      return fullText;
    }
  } else {
    return fullText;
  }
};
const MuiButton = ({
  variant = "contained",
  text,
  textOnMobile,
  type = "",
  color = "success",
  size = "default",
  className,
  style,
  isLoading = false,
  disabled = false,
  wrapperStyle,
  children,
  ...otherProps
}) => {
  const getClass = () => {
    if (variant === "contained" && color) {
      return getClassName(color);
    } else {
      return "";
    }
  };

  return (
    <div className={`${uvStyle.btnWrapper} ${className}`} style={wrapperStyle}>
      <Button
        {...otherProps}
        variant={variant}
        className={getClass() + ` ${uvStyle.btn}  `}
        style={{ ...style, ...getSize(size) }}
        disabled={isLoading || disabled}
        type={type ? type : "button"}
      >
        {children ? children : <span style={getPosition(size)}>{getText(text, textOnMobile)}</span>}
      </Button>
      {isLoading && <Loading className={`${uvStyle.loading}`} size={20} />}
    </div>
  );
};

export default MuiButton;
