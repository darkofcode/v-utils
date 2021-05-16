import React, { ReactNode } from "react";

export interface Props {
  onLogoClick?: Function;
  onEditNameClick?: Function;

  open: boolean;
  onClose: Function;
  title?: string;
  maxWidth?: "lg" | "md" | "sm" | "xl" | "xs" | false;
  component: ReactNode;
  isFullScreen?: boolean;
  showPrint?: boolean;
  disableDefaultClose?: boolean;
  PrintIcon: Element;
  onPrintClick: Function;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
