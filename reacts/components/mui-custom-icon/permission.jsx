import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/permission.svg";

const mStyle = {
  fontSize: "1.3rem",
  position: "relative",
  left: "1.2px",
  marginRight: "2px",
  display: "flex",
};
const Google = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...mStyle, ...style }}
      {...otherProps}
      component={Icon}
      viewBox="0 0 448 512"
    />
  );
};

export default Google;
