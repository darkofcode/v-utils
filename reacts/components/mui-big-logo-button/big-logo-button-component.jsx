import React from "react";
import mStyle from "./big-logo-button-styles.module.scss";
import Button from "@material-ui/core/ButtonBase";
// import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import config from "uv-env/config";

const colors = config.colors;

const BigLogoButton = (props) => {
  const {
    logo,
    text,
    bgColor,
    className,
    style,
    logoWrapperStyle,
    logoWrapperClassName,
    isLoading,
    disabled,
    ...otherProps
  } = props;
  const color = bgColor ? bgColor : colors.blueLight;
  return (
    <div className={`${mStyle.wrapper} ${className} shadow`} style={{ ...style }}>
      <Button
        disabled={isLoading || disabled}
        {...otherProps}
        className={`${mStyle.cardBtn}  `}
        style={{ backgroundColor: color }}
      >
        <div style={logoWrapperStyle} className={logoWrapperClassName}>
          {logo}
        </div>
        <div className={`${mStyle.name}  `}>{text}</div>
      </Button>
      {isLoading && <CircularProgress style={{ color: colors.white }} size={36} className={`${mStyle.loading} `} />}
    </div>
  );
};
BigLogoButton.propTypes = {
  logo: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  logoWrapperStyle: PropTypes.object,
  logoWrapperClassName: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default BigLogoButton;
