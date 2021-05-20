import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/person-check-fill.svg";

const mStyle = {
  fontSize: "1.3rem",
  position: "relative",
  display: "flex",
  top: "1.5px",
};
const Focus = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon fontSize="inherit" style={{ ...mStyle, ...style }} {...otherProps} component={Icon} viewBox="0 0 16 16" />
  );
};

export default Focus;
