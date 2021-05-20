import React from "react";
import { ReactElement } from "react";
export interface Props {
  open: boolean;
  title: string;
  content: string | ReactElement;
  onClose: (confirm: boolean) => void;
  yes: string;
  no: string;
  yesColor?: "success" | "warning" | "info" | "error" | "danger";
  noColor?: "success" | "warning" | "info" | "error" | "danger";
  loading: boolean;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
