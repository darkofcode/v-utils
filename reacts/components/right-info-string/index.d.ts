import React from "react";
export interface Props {
  info: string | Node;
  color: string;
  footer: string | Node;
  onInfoClick: Function;
  onFooterClick: Function;
  onClick: Function;
  wrapperClassName: string;
  wrapperStyle: any;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
