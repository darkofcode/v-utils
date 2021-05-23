import { useState } from "react";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import React from "react";
import "./calendar.css";
import "./date-picker.css";
import { countChar } from "uv-utils/js-functions/string/counter-char";
import { multiply } from "uv-utils/js-functions/string/multiply";
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
      <DatePicker
        dayPlaceholder={getPlaceholder(format, "d")}
        monthPlaceholder={getPlaceholder(format, "m")}
        yearPlaceholder={"yyyy"}
        className={inputClassName}
        format={format}
        onChange={handleOnChange}
        value={date}
      />
    </div>
  );
}

const getPlaceholder = (format, placeholder) => {
  const count = countChar(format, placeholder, false);
  return multiply(placeholder, count);
};
