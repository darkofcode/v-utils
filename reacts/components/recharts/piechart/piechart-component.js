import React, { useState } from "react";
import { PieChart, Pie, Legend, ResponsiveContainer, Cell, Sector } from "recharts";

import { get } from "../../../../js-functions/object/get";
import { rechartsColors } from "../config/color";
import truncate from "lodash/truncate";

const COLORS = rechartsColors.colors;

export default function PieChartComponent({
  pieData = [],
  dataKey,
  labelKey,
  valueName = "",
  valuePos = "pre",
  rateName = "",
  legendOption = {
    show: true,
    valueKey: "",
    length: 12,
  },
}) {
  const [activePie, setActivePie] = useState(0);
  const legendShow = legendOption.show;
  const legendKeyValue = legendOption.valueKey ? legendOption.valueKey : labelKey;
  // console.log(`from piechart`, pieData);

  const CustomLegend = (value, entry) => {
    // console.log(`from custom legend`, { value, entry });

    const getLegendName = (v) => {
      return truncate(v, { length: legendOption.length });
    };
    return (
      <span style={{ color: rechartsColors.colors[value] }}>
        {getLegendName(get(entry, ["payload", legendKeyValue], ""))}
      </span>
    );
  };

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload[labelKey]}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 8}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="rgb(255, 187, 40)">
          {getValue(valueName, value, valuePos)}
        </text>
        <text
          style={{ fontSize: "0.7em" }}
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#cecece"
        >
          {`(${rateName} ${(percent * 100).toFixed(2)}% )`}
        </text>
      </g>
    );
  };
  const onPieEnter = (_, index) => {
    setActivePie(index);
  };
  return (
    <>
      {pieData.length ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              labelLine={false}
              activeIndex={activePie}
              activeShape={renderActiveShape}
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey={dataKey}
              onMouseEnter={onPieEnter}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            {legendShow && <Legend formatter={CustomLegend} />}
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
}

const getValue = (valueName, value, pre) => {
  return pre === "pre" ? `${valueName} ${value}` : `${value} ${valueName}`;
};
