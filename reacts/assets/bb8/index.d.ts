import React from "react";
export interface Props {
  className?: string;
  style?: { [key: string]: string };
  bodyColor?: string;
  headColor?: string;
  headDownColor?: string;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
