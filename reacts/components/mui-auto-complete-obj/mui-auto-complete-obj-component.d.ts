import React from "react";

export interface Props {
  value?: string[] | string;
  options: string[];
  limitTags?: number;
  maxTagLength?: number;
  style?: any;
  width?: string;
  placeholder?: string;
  className?: string;
  multiple?: boolean;
  onChange?: Function;
  onSelected?: Function;
  onQuickAdd?: Function;
  variant?: "box" | "round" | "naked";
  showCheckbox: boolean;
  popperColor: string;
}

declare const ReactInterface: React.ComponentType<Props>;

export default ReactInterface;
