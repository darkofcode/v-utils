import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/contract.svg";

const mStyle = {
  fontSize: "1.3rem",
  marginRight: "3px",
  position: "relative",
  left: "1px",
  display: "flex",
};
const Contract = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...mStyle, ...style }}
      {...otherProps}
      component={Icon}
      viewBox="0 0 384 512"
    />
  );
};

export default Contract;
