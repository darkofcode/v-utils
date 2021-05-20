import React, { ReactNode } from "react";

export interface Props {
  loading: boolean;
  ListComponents: ReactNode;
  FooterComponent: ReactNode;
  footerWrapperStyle?: any;
  wrapperStyle?: Object;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
