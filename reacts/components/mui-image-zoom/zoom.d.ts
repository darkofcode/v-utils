import React, { ReactNode } from "react";

export interface Props {
  open: boolean;
  onClose: Function;
  loading: boolean;
  title?: string;
  maxWidth?: "lg" | "md" | "sm" | "xl" | "xs" | false;
  imgSrc: ReactNode;
  isFullScreen?: boolean;
  Footer: ReactNode;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
