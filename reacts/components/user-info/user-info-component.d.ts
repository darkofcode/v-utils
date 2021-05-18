import React from "react";

export interface Props {
  photoUrl: string;
  name: string;
  nameColor: string;
  nameStyle: string;
  otherInfos?: string[] | number[];
  otherStyle?: string;
  imgWidth?: string;
  imgGap?: string;
  badgeStyle?: any;
  badgeColor?: string;
  isNameUppercase?: boolean;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
