import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/inventory.svg";

const mStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};
const IconAccExpense = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon fontSize="inherit" style={{ ...mStyle, ...style }} {...otherProps} component={Icon} viewBox="0 0 24 24" />
  );
};

export default IconAccExpense;
