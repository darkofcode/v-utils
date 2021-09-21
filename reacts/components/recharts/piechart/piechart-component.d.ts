import React from "react";
export interface Props {
  pieData: any[];
  dataKey: string;
  labelKey;
  valueName: string;
  valuePos: "pos" | "pre";
  rateName: string;
  legendOption: {
    show: true;
    valueKey: "";
    length: 12;
  };
  className?: string;
}

declare const ComponentName: React.ComponentType<Props>;

export default ComponentName;
