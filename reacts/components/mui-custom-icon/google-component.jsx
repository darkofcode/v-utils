import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as GoogleIcon } from "../assets/images/google.svg";

const mStyle = {
  transform: "scale(0.83)",
  display: "flex",
};
const Google = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...mStyle, ...style }}
      {...otherProps}
      component={GoogleIcon}
      viewBox="0 0 488 512"
    />
  );
};

export default Google;
