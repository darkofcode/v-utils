import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/cap.svg";

const mStyle = {
  fontSize: "1.3rem",
  position: "relative",
  left: "2px",
  marginRight: "3px",
  display: "flex",
};
const UserRole = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...mStyle, ...style }}
      {...otherProps}
      viewBox="0 0 640 512"
      // viewBox="0 0 640 512"
    >
      <Icon />
    </SvgIcon>
  );
};

export default UserRole;
