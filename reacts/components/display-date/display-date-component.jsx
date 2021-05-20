import React from "react";
import uvStyle from "./display-date-style.module.scss";
import format from "date-fns/format";
import { colors } from "../mui-config/colors";
import Badge from "../mui-custom-icon/badge";
import truncate from "lodash/truncate";
import isEmpty from "lodash/isEmpty";

export default function DisplayDateComponent({
  date: dateStr,
  scale = 1,
  backgroundColor = colors.greenDark,
  dateWrapperStyle,
  dateWrapperClassName,
  dayClassName,
  dayStyle,
  gap = "12px",
  badgeStyle,
  badgeColor,
  mainInfo = "",
  mainInfoColor = colors.pink,
  mainStyle,
  otherInfos = [],
  otherStyle,
  dateInfo,
  isMainInfoUppercase = true,
  onClick,
}) {
  dateStr = dateStr ? dateStr : new Date();
  const date = isEmpty(dateInfo) ? new Date(dateStr) : dateInfo;
  const time = isEmpty(dateInfo) ? format(date, "HH:mm") : dateInfo["bottom"];
  const day = isEmpty(dateInfo) ? format(date, "do") : dateInfo["middle"];
  const monthYear = isEmpty(dateInfo) ? `${format(date, "LLL")} ${format(date, "yyyy")}` : dateInfo["top"];
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <div onClick={handleClick} className={`${uvStyle.wrapper} ${onClick ? "pointer" : ""}`}>
      <div
        className={`${dateWrapperClassName} ${uvStyle.dateBadgeWrapper} shadow`}
        style={{
          marginRight: gap,
          backgroundColor: backgroundColor,
          transform: `scale(${scale})`,
          ...dateWrapperStyle,
        }}
      >
        <div className={` ${uvStyle.dateWrapper} `}>
          <div className={` ${uvStyle.top} `}>{monthYear}</div>
          <div className={`${dayClassName} ${uvStyle.middle} `} style={dayStyle}>
            {day}
          </div>
          <div className={` ${uvStyle.bottom} `}>{time}</div>
        </div>
        {!!badgeColor && <Badge className={` ${uvStyle.userBadge} `} style={{ color: badgeColor, ...badgeStyle }} />}
      </div>

      <div>
        <div style={{ color: mainInfoColor, ...mainStyle }}>{getMainInfo(mainInfo, isMainInfoUppercase)}</div>
        {!!otherInfos.length && (
          <>
            {otherInfos.map((info, index) => (
              <div key={index} className={` ${uvStyle.otherInfo} `} style={otherStyle}>
                {info}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const getMainInfo = (mainInfo, isUppercase) => {
  const n = truncate(mainInfo, { length: 18 });
  return isUppercase ? n.toUpperCase() : n;
};
