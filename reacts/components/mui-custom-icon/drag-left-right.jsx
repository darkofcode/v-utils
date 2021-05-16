import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/drag.svg";

const mStyle = {
  // transform: "scale(0.83)",
  display: "flex",
};
const Drag = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon fontSize="inherit" style={{ ...mStyle, ...style }} {...otherProps} component={Icon} viewBox="0 0 24 24" />
  );
};

export default Drag;
