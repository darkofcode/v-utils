import React from "react";
import uvStyle from "./mui-snackbar-styles.module.scss";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { colors } from "../mui-config/colors";

const MuiSnakebar = ({
  message,
  open = false,
  onClose,
  type = "success",
  autoHideDuration = 3300,
  positionX = "center",
  positionY = "bottom",
  ...otherProps
}) => {
  // console.log(`from snack bar`, autoHideDuration);
  const handleClose = (e, reason) => {
    onClose(e, reason);
  };
  const getStyle = () => {
    switch (type) {
      case "error":
        return {
          backgroundColor: colors.error,
        };
      case "warning":
        return {
          backgroundColor: colors.warning,
        };
      case "info":
        return {
          backgroundColor: colors.info,
        };
      default:
        // case success
        return {
          backgroundColor: colors.success,
        };
    }
  };
  // console.log(`from component`, JSON.stringify({ snack: "running snake", open }, null, 2));
  return (
    <Snackbar
      {...otherProps}
      anchorOrigin={{ vertical: positionY, horizontal: positionX }}
      open={open}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
      children={
        <div className={`${uvStyle.snackChild} MuiPaper-root MuiPaper-elevation6`} style={getStyle()}>
          <div className={` MuiSnackbarContent-message mr-2`}>{message}</div>
          <div className={` MuiSnackbarContent-action`}>
            <IconButton size="small" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      }
    />
  );
};
// message, open = false, onClose, type = "success", autoHideDuration

export default MuiSnakebar;
