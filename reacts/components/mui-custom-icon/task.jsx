import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/task.svg";

const mStyle = {
  fontSize: "1.2rem",
  position: "relative",
  left: "2px",
  marginRight: "5px",
  display: "flex",
};
const UserRole = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...mStyle, ...style }}
      {...otherProps}
      viewBox="0 0 24 24"
      // viewBox="0 0 640 512"
    >
      <Icon />
    </SvgIcon>
  );
};

export default UserRole;
