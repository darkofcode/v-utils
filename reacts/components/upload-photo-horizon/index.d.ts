import React from "react";
export interface Props {
  wrapperStyle?: { [key: string]: string };
  wrapperClassName?: string;
  isSquareImage?: boolean;
  imgText?: string;
  imgHeight?: string;
  btnWidth?: string;
  btnColor?: string;
  btnText?: string;
  imgPath?: string;
  imgSource?: string | null;
  onImgSourceChange?: Function;
  onCropChange: (imgData: string, crop: any) => VoidFunction;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
