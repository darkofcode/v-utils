import React from "react";

export interface Props {
  width?: string;
  className?: string;
  placeholder?: string;
  variant?: "box" | "round" | "naked";
  style?: any;
  value: string;
  resize: string;
  rows: number;
  onChange: () => VoidFunction;
  minHeight: string;
  spellCheck: boolean;
}

declare const ReactInterface: React.ComponentType<Props>;

export default ReactInterface;
