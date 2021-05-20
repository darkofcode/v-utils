import React from "react";

export interface Props {
  width?: string;
  className?: string;
  placeholder?: string;
  variant?: "box" | "round" | "naked";
  style?: any;
  value: string;
  resize: string;
}

declare const ReactInterface: React.ComponentType<Props>;

export default ReactInterface;
