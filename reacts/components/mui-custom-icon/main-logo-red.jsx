import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/logo-red.svg";

const mStyle = {
  display: "flex",
  width: "21px",
  height: "24px",
};
const MainLogo = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon fontSize="inherit" style={{ ...mStyle, ...style }} {...otherProps} component={Icon} viewBox="0 0 24 24" />
  );
};

export default MainLogo;
