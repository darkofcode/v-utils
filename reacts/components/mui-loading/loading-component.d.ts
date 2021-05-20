import React, { ReactNode } from "react";

export interface Props {
  isLoading: boolean;
  NotLoadingComponent?: ReactNode;
  middleScreen: boolean;
  size: Number;
  onFinishedLoading?: Function;
}

declare const ComponentName: React.ComponentType<Props>;
/*
  isLoading: PropTypes.bool.isRequired,
  NotLoadingComponent: PropTypes.element,
*/
export default ComponentName;
