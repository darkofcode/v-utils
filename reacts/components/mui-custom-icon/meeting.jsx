import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/meeting.svg";

const mStyle = {
  transform: "scale(1.415)",
  display: "flex",
  position: "relative",
  left: "5px",
  marginRight: "10px",
};
const UserRole = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon fontSize="inherit" style={{ ...mStyle, ...style }} {...otherProps} viewBox="0 0 24 24">
      <Icon />
    </SvgIcon>
  );
};

export default UserRole;
