import React from "react";
export interface Props {
  rate: Number | string;
  post: string;
  colorGrade: "a" | "b" | "c" | "f";
  showDecimal: boolean;
  append: "pre" | "post";
  onClick: Function;
  showUnderline: boolean;
  wrapperClassName: string;
  wrapperStyle: any;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
