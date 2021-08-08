import React from "react";

export interface Props {
  width?: string;
  className?: string;
  placeholder?: string;
  variant?: "box" | "round" | "naked" | "nothing";
  style?: any;
  onKeyEnter?: Function;
  onChange?: Function;
  onInputChange?: Function;
}

declare const ReactInterface: React.ComponentType<Props>;

export default ReactInterface;
