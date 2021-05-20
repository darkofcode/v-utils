import React from "react";
export interface Props {
  onChange: (page: number, filter: string) => void;
  options: string[];
  initPage: number;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
