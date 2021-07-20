import React, { useRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// import config from "../../config/config";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import uvStyle from "./dynamic-styles.module.scss";
import IconPrint from "@material-ui/icons/Print";

const btnWrapper = {
  position: "absolute",
  right: "0",
};
const dialogTitleStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
// const printStyle = {
//   position: "relative",
//   right: "-12px",
// };
const DynamicModal = ({
  open,
  title,
  onClose,
  component,
  maxWidth = "sm",
  isFullScreen,
  showPrint = false,
  PrintIcon = <IconPrint />,
  onPrintClick,
  disableDefaultClose = false,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs")) || isFullScreen;
  const handleClose = (value) => {
    onClose(value);
  };
  const modalElm = useRef(null);

  const handlePrint = () => {
    if (!onPrintClick) {
      window.print();
    } else {
      onPrintClick();
    }
  };

  return (
    <>
      <Dialog
        ref={modalElm}
        fullScreen={fullScreen}
        fullWidth={true}
        open={open}
        onClose={() => handleClose(null)}
        maxWidth={maxWidth}
        disableEscapeKeyDown={disableDefaultClose}
        disableBackdropClick={disableDefaultClose}
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
      >
        <DialogTitle
        // id="alert-dialog-title"
        >
          <div style={dialogTitleStyle}>
            <div className="d-print-none">{title ? title : "Are you sure?"}</div>
            <div className="d-print-none" style={btnWrapper}>
              {showPrint && (
                <IconButton
                  style={{ position: "relative", right: `${disableDefaultClose ? "0" : "-12px"}` }}
                  color="inherit"
                  onClick={handlePrint}
                >
                  {PrintIcon}
                </IconButton>
              )}
              {!disableDefaultClose && (
                <IconButton color="inherit" aria-label="close" onClick={() => handleClose(null)}>
                  <CloseIcon />
                </IconButton>
              )}
            </div>
          </div>
        </DialogTitle>
        <div className={`${uvStyle.content} `}>{component}</div>
      </Dialog>
    </>
  );
};

export default DynamicModal;
