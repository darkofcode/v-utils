import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import uvStyle from "./style.module.scss";
import { colors } from "../mui-config/colors";

const useStyles = (variant) => {
  let style;
  if (variant === "box") {
    style = {
      borderRadius: "0px",
      background: colors.grey,
    };
  }
  if (variant === "round") {
    style = {
      borderRadius: "4px",
      background: colors.grey,
    };
  }
  if (variant === "naked") {
    style = {
      background: "transparent",
      boxShadow: "none",
      color: "inherit",
    };
  }
  if (variant === "nothing") {
    style = {
      background: "transparent",
      boxShadow: "none",
      color: "inherit",
      borderBottom: "none",
    };
  }
  return makeStyles({ root: style });
};

const AutoSizeTextArea = ({
  className = "",
  variant = "naked",
  resize: _resize = "none",
  style,
  onChange,
  rows,
  minHeight,
  width,
  spellCheck = true,
  ...other
}) => {
  const classes = useStyles(variant)();
  const resize = (e) => {
    const text = e.target;
    text.style.height = "auto";
    text.style.height = text.scrollHeight + "px";
    if (onChange) onChange(e);
  };
  const [_rows, setRows] = useState(1);
  const v = other.value;
  const getMinHeight = minHeight ? minHeight : "36.8px";
  // const elm = useRef(null);
  useEffect(() => {
    // if (!mounted) return;
    if (rows) return setRows(rows);
    let countRows = v ? v.split("\n").length : 0;
    countRows = countRows + 1;
    setRows(countRows);
  }, [v]); //eslint-disable-line

  // console.log(`from text are`, getMinHeight);
  return (
    <textarea
      style={{ minHeight: getMinHeight, resize: _resize, ...style }}
      rows={_rows}
      className={`${classes.root} ${uvStyle.textArea} ${className}`}
      onChange={resize}
      spellCheck={spellCheck}
      {...other}
    ></textarea>
  );
};
// MuiInput.propTypes = {
// }

export default AutoSizeTextArea;
