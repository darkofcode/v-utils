import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/request.svg";

const mStyle = {
  fontSize: "1.3rem",
  marginRight: "3px",
  position: "relative",
  left: "2px",
  display: "flex",
};
const Request = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...mStyle, ...style }}
      {...otherProps}
      component={Icon}
      viewBox="0 0 576 512"
    />
  );
};

export default Request;
