//  eslint-disable-next-line
import React from "react";

export interface Props {
  date: Date | string;
  scale: number;
  backgroundColor: string;
  dateWrapperStyle: any;
  dateWrapperClassName: string;
  dayClassName: string;
  dayStyle: any;
  gap: string;
  badgeStyle: any;
  badgeColor: string;
  mainInfo: string;
  mainInfoColor: string;
  mainStyle: any;
  otherInfos: string[];
  otherStyle: any;
  dateInfo?: { top: string; middle: string; bottom: string };
  isMainInfoUppercase?: boolean;
  onClick: Function;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
