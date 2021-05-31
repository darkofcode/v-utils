import React from "react";
import uvStyle from "./style.module.scss";
import { colors } from "../mui-config/colors";

export default function RightInfoString({
  info,
  color = "rgb(48 185 172)",
  footer = "",
  onInfoClick,
  onFooterClick,
  onClick = () => {},
  wrapperClassName,
  wrapperStyle,
}) {
  const handleInfoClick = () => {
    if (typeof onInfoClick === "function") {
      onInfoClick();
    }
  };
  const handleFooterClick = () => {
    if (typeof onFooterClick === "function") {
      onFooterClick();
    }
  };
  const getColor = () => {
    const _color = colors[color];
    // console.log(`from right info`, { _color });
    return _color ? _color : color;
  };
  return (
    <div
      onClick={() => onClick()}
      style={wrapperStyle}
      className={` ${uvStyle.wrapper} ${wrapperClassName} ${onClick ? "pointer" : ""} `}
    >
      <div onClick={handleInfoClick} className={` ${uvStyle.info} ${onInfoClick ? "pointer" : ""} `}>
        {info}
      </div>
      <div className={`${uvStyle.underline} `} style={{ backgroundColor: getColor() }}></div>
      <div onClick={handleFooterClick} className={` ${uvStyle.footer} ${onFooterClick ? "pointer" : ""}`}>
        {footer}
      </div>
    </div>
  );
}
