import React from "react";
import { round } from "../../uv-commons/js-functions/numbers/round";
import uvStyle from "./style.module.scss";

export default function RightInfoNumber({
  rate,
  post = "%",
  colorGrade,
  showDecimal = true,
  append = "post",
  onClick,
  showUnderline = true,
  wrapperClassName,
  wrapperStyle,
}) {
  const split = getSplit(rate);
  const color = getColor(rate, colorGrade);
  const handleClick = () => {
    if (typeof onClick === "function") onClick();
  };
  return (
    <div
      onClick={handleClick}
      className={` ${uvStyle.wrapper} ${onClick ? "pointer" : ""} ${wrapperClassName}`}
      style={wrapperStyle}
    >
      <div className={` ${uvStyle.digitWrapper} `}>
        {append === "pre" && <div className={` ${uvStyle.letter} mr-1`}>{post}</div>}
        <div className={` ${uvStyle.pre} `}>{split.pre}</div>
        {showDecimal && <div>.</div>}
        {showDecimal && <div className={` ${uvStyle.post} `}>{split.post}</div>}
        {append === "post" && <div className={` ${uvStyle.letter} ml-1`}>{post}</div>}
      </div>
      {showUnderline && <div className={`${color} ${uvStyle.underline} `}></div>}
    </div>
  );
}

const getSplit = (rate) => {
  const raw = round(rate).split(".");
  return { pre: raw[0], post: raw[1] };
};
const getColor = (number, colorGrade) => {
  if (colorGrade) {
    const g = colorGrade.toString().toLowerCase();
    switch (g) {
      case "a":
        return uvStyle.green;
      case "b":
        return uvStyle.greenIsh;
      case "c":
        return uvStyle.brown;
      default:
        return uvStyle.red;
    }
  }
  const num = +number;
  if (num < 50) {
    return uvStyle.red;
  } else if (num < 75) {
    return uvStyle.brown;
  } else if (num < 90) {
    return uvStyle.greenIsh;
  } else {
    return uvStyle.green;
  }
};
