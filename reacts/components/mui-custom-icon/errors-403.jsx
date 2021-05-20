import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/403.svg";

const mStyle = {
  display: "flex",
};
const NotFound = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...style, ...mStyle }}
      {...otherProps}
      component={Icon}
      viewBox="0 0 478.72 373.69"
    />
  );
};

export default NotFound;
