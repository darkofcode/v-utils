import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/edit.svg";

const mStyle = {
  // transform: "scale(0.83)",
  display: "flex",
};
const Edit = (props) => {
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

export default Edit;
