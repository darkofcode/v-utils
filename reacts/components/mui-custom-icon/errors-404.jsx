import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/404.svg";

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
      viewBox="0 0 419.62 417.24"
    />
  );
};

export default NotFound;
