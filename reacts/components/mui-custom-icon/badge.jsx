import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/badge-line-incline.svg";

const mStyle = {
  transform: "scale(3)",
  display: "flex",
};
const Badge = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...mStyle, ...style }}
      {...otherProps}
      component={Icon}
      viewBox="0 0 102.5 39"
    />
  );
};

export default Badge;
