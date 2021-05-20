import IconDown from "@material-ui/icons/ArrowDropDown";
import uvStyle from "./style.module.scss";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import React from "react";

export default function ActiveUser({ userPath, navPath, name, activeClassName, onLogout = () => {} }) {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    onLogout();
    setAnchorEl(null);
  };
  const textClass = clsx(uvStyle.hideMobile, { [activeClassName]: location.pathname.includes(navPath) });
  return (
    <>
      <Button
        onClick={(e) => setAnchorEl(e.currentTarget)}
        className={clsx(uvStyle.wrapper)}
        style={{ textTransform: "capitalize", color: "inherit", minWidth: "0" }}
      >
        <div className={uvStyle.imgWrapper}>
          <img className={` ${uvStyle.img}`} src={userPath} alt="userPhoto" />
        </div>
        <span className={textClass}>{name}</span>
        <IconDown className={textClass} />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <NavLink to={navPath}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </NavLink>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
