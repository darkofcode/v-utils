# Interface

## React

```javascript
import React, { ReactNode } from "react";

export interface Props {
  indicators?: boolean;
  autoPlay?: boolean;
  navButtonsAlwaysVisible?: boolean;
  fullHeightHover?: boolean;
  interval?: number;
  animation?: "fade" | "slide" | "pop";
  children?: ReactNode;
  className?: string;
  timeout?: number | { appear?: number; enter?: number; exit?: number };
  startAt?: number;
  strictIndexing?: boolean;
  next?: Function;
  prev?: Function;
  onPressIndicator?: Function;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;

```
