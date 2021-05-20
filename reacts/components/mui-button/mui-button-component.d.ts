import React from "react";
export interface Props {
  text: string;
  type?: "submit" | "reset" | "button";
  color?: "success" | "warning" | "info" | "error" | "danger";
  size?: "small" | "default";
  variant?: "outlined" | "contained";
  isLoading?: boolean;
  disabled?: boolean;
  style?: any;
  className?: string;
  textOnMobile?: string;
  onClick?: Function;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
