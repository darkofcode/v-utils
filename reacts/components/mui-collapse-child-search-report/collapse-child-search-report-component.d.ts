import React, { ReactNode } from "react";

export interface Props {
  onReportClick: Function;
  onSearchSubmit: ({ date: Date, string: string, number: Number }) => void;
  onAddList: Function;
  onImportClick: Function;
  component: ReactNode;
  title: string;
  isListOpen?: boolean;
  keepAlive: boolean;
  minWidth?: string;
  maxWidth?: string;
  isFullHeight?: boolean;
  wrapperPadding?: string;
  loading?: boolean;
  dateFormat: string;
  searchPlaceholders: string[];
}

declare const ReactInterface: React.ComponentType<Props>;

export default ReactInterface;
