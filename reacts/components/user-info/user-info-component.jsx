import React from "react";
import uvStyle from "./user-info-style.module.scss";
import truncate from "lodash/truncate";
import defaultSize from "../config/config";
import Badge from "../custom-icon/badge";
import config from "../config/config";

export default function UserInfoComponent({
  photoUrl,
  name,
  nameColor = config.colors.pink,
  nameStyle,
  otherStyle,
  otherInfos = [],
  imgWidth = "3.6rem",
  imgGap = "12px",
  badgeStyle,
  badgeColor,
  isNameUppercase = true,
}) {
  return (
    <div className={` ${uvStyle.userWrapper} `}>
      <div className={` ${uvStyle.imgWrapper} shadow`} style={{ marginRight: imgGap }}>
        <img style={{ width: imgWidth }} className={`  userImg`} src={photoUrl} alt="user" />
        {!!badgeColor && <Badge className={`${uvStyle.userBadge} `} style={{ color: badgeColor, ...badgeStyle }} />}
      </div>
      <div className={` ${uvStyle.userInfo} `}>
        <div style={{ color: nameColor, ...nameStyle }}>{getName(name, isNameUppercase)}</div>

        {!!otherInfos.length && (
          <>
            {otherInfos.map((info, index) => (
              <div key={index} className={` ${uvStyle.userAll}  `} style={otherStyle}>
                {info}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const getName = (name, isUppercase) => {
  const n = truncate(name, { length: defaultSize.length.name });
  return isUppercase ? n.toUpperCase() : n;
};
