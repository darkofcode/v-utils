import React from "react";
import PropTypes from "prop-types";
import uvStyle from "./rotate-styles.module.scss";

const Rotate = ({ component, degree, isCollapse, className, style, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      className={`${className} ${uvStyle.clickToRotate} `}
      style={isCollapse ? { transform: `rotate(${degree}deg)`, ...style } : { ...style }}
    >
      {component}
    </div>
  );
};
Rotate.propTypes = {
  component: PropTypes.element.isRequired,
  degree: PropTypes.number.isRequired,
  isCollapse: PropTypes.bool.isRequired
};
export default Rotate;
