import React from "react";
import Button from "../../mui-button/mui-button-component";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { colors } from "../../mui-config/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";

const closeBtnStyle = {
  position: "absolute",
  right: "0",
  color: colors.white,
};
const dialogTitleStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const Confirm = ({ open, title, content, onClose, yes, no, loading, yesColor = "success", noColor = "success" }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const handleClose = (value) => {
    onClose(value);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        open={open}
        onClose={() => handleClose(null)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div style={dialogTitleStyle}>
            <div>{title ? title : "Are you sure?"}</div>
            <IconButton style={closeBtnStyle} aria-label="close" onClick={() => handleClose(null)}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <div style={{ padding: "8px 24px", paddingBottom: "16px" }}>{content}</div>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose(false);
            }}
            color={noColor}
            text={no ? no : "No"}
          />
          <Button
            isLoading={loading}
            onClick={() => {
              handleClose(true);
            }}
            color={yesColor}
            text={yes ? yes : "Yes"}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Confirm;
