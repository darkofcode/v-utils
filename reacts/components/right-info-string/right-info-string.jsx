import React from "react";
import uvStyle from "./style.module.scss";

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
  return (
    <div
      onClick={() => onClick()}
      style={wrapperStyle}
      className={` ${uvStyle.wrapper} ${wrapperClassName} ${onClick ? "pointer" : ""} `}
    >
      <div onClick={handleInfoClick} className={` ${uvStyle.info} ${onInfoClick ? "pointer" : ""} `}>
        {info}
      </div>
      <div className={`${uvStyle.underline} `} style={{ backgroundColor: color ? color : "rgb(48 185 172)" }}></div>
      <div onClick={handleFooterClick} className={` ${uvStyle.footer} ${onFooterClick ? "pointer" : ""}`}>
        {footer}
      </div>
    </div>
  );
}
