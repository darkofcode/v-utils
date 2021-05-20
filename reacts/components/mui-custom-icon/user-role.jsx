import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/user-role.svg";

const mStyle = {
  transform: "scale(1.715)",
  display: "flex",
  position: "relative",
  left: "6px",
  marginRight: "10px",
};
const UserRole = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon fontSize="inherit" style={{ ...mStyle, ...style }} {...otherProps} viewBox="0 0 640 512">
      <Icon />
    </SvgIcon>
  );
};

export default UserRole;
