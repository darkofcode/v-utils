import { useState } from "react";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import React from "react";
import "./calendar.css";
import "./date-picker.css";
// import { useEffect } from "react";

export default function ({ name, onChange = () => {}, value, inputClassName, style, format = "yy-MM-dd" }) {
  const [date, setDate] = useState(value);
  const handleOnChange = (value) => {
    setDate(value);
    onChange({ target: { name, value } });
  };
  // useEffect(() => {
  //   console.log(`from value date change`, { value });
  //   setDate(value);
  // }, [value]);
  return (
    <div style={style}>
      <DatePicker className={inputClassName} format={format} onChange={handleOnChange} value={date} />
    </div>
  );
}
