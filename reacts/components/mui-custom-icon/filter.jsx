import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/filter.svg";

const mStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};
const IconMinusCart = ({ style, scale, ...otherProps }) => {
  // const { style, scale, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...mStyle, ...style, transform: `scale(${scale})` }}
      {...otherProps}
      component={Icon}
      viewBox="0 0 22 24"
    />
  );
};

export default IconMinusCart;
