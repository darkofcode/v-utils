import React, { useEffect, useState } from "react";
import Input from "../mui-input/mui-input-component";

export default function InputNumber({ name, value = "", onChange = () => {}, ...props }) {
  const [_value, setValue] = useState(value);
  const handleChange = (e) => {
    const v = e.target.value;
    if (v === "" || /^[0-9\b]+$/.test(v)) {
      onChange({ target: { value: v, name } });
      setValue(v);
    }
  };
  useEffect(() => {
    setValue(value);
  }, [value]);
  return <Input {...props} onChange={handleChange} value={_value} name={name} />;
}
