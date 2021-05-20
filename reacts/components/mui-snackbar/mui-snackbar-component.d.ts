import React from "react";

export interface Props {
  message: string;
  open: boolean;
  onClose: Function;
  type: "error" | "warning" | "info" | "success";
  autoHideDuration: Number;
  positionX: "center" | "left" | "right";
  positionY: "bottom" | "top";
}

declare const ReactInterface: React.ComponentType<Props>;

export default ReactInterface;
