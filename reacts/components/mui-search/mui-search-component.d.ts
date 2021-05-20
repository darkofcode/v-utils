import React from "react";

export interface Props {
  width?: string;
  className?: string;
  placeholder?: string;
  variant?: "box" | "round" | "naked";
  style?: any;
  onChange: Function;
  onKeyDown: Function;
  inputStyle: any;
  value?: string;
}

declare const ReactInterface: React.ComponentType<Props>;

export default ReactInterface;
