import React, { useState } from "react";
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart } from "recharts";
import { rechartsColors } from "../config/color";

export default function BarChartComponent({ data = [], headers = [], dataKey = "0" }) {
  const [opacity, setOpacity] = useState(getOpacityObj(headers));
  const handleLegendClick = (o) => {
    const { dataKey } = o;
    setOpacity((pre) => ({ ...pre, [dataKey]: pre[dataKey] ? 0 : 1 }));
  };
  const CustomLegend = (value, entry) => {
    return <span>{headers[value]}</span>;
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rechartsTooltip">
          {payload.map((row, i) => (
            <div key={i}>
              {/* <div>{get(row, ["payload", 0])}</div> */}
              <div>
                <span>{`${headers[row.dataKey]}: `}</span>
                <span className="font-bold">{`${row.value}`}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {data.length ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke={rechartsColors.grid} strokeDasharray="3 3" />
            <XAxis dataKey={dataKey} stroke={rechartsColors.green} />
            <YAxis stroke={rechartsColors.green} />
            <Tooltip cursor={false} content={<CustomTooltip />} />
            <Legend formatter={CustomLegend} onClick={handleLegendClick} />
            {headers.slice(1).map((h, i) => (
              <Bar opacity={opacity[i + 1]} key={i} dataKey={i + 1} fill={rechartsColors.colors[i]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
}
const getOpacityObj = (headers) => {
  if (!headers.length) return {};
  let r = {};
  for (let i = 0; i < headers.length; i++) {
    r[i] = 1;
  }
  return r;
};
