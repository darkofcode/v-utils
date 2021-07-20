import React, { useState, useEffect } from "react";
import uvStyle from "./mui-date-picker-styles.module.scss";
import DatePickerLib from "../raw-date-picker/raw-date-picker-component";
import Input from "../mui-input/mui-input-component";
import DateIcon from "@material-ui/icons/EventAvailable";
import { getFormat } from "../../../js-functions/date/get-format";
import PropTypes from "prop-types";
import { getCurrentTime } from "../../../js-functions/date/get-current-time";
import getYear from "date-fns/getYear";
import range from "lodash/range";
import getMonth from "date-fns/getMonth";
import IconLeft from "@material-ui/icons/KeyboardArrowLeft";
import IconRight from "@material-ui/icons/KeyboardArrowRight";

const MuiDatePicker = ({
  format,
  value,
  onChange = () => {},
  onBlur = () => {},
  name,
  style,
  className,
  inputClassName,
  inputTextAlign = "start",
  align,
  // dayClassName,
  includeTime,
  minDate,
  maxDate,
  variant,
  placeholder,
  svgColor = "inherit",
  showDateIcon = true,
  readOnly = false,
  ...otherProps
}) => {
  const [startDate, setStartDate] = useState(new Date(value ? value : new Date()));
  const [isDisplay, setIsDisplay] = useState(!!value);
  const [inputElm, setInputElm] = useState(null);
  const years = range(getYear(new Date()) - 45, getYear(new Date()) + 45, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const handleDateClick = (date) => {
    // const d = startDate;
    // date = isDate(date) ? date.toJSON() : date;
    // console.log({ date });
    // inputElm.current.focus();
    try {
      setIsDisplay(true);
      let newDate;
      // date = parseDate(date, getDateFormat(format, includeTime), new Date());
      // console.log({ date });

      if (includeTime) {
        const d = new Date();
        newDate =
          date.getTime() -
          (date.getSeconds() * 1000 + date.getMilliseconds()) +
          d.getSeconds() * 1000 +
          d.getMilliseconds();
      } else {
        newDate = date.getTime() - getCurrentTime(date) + getCurrentTime();
      }
      let event = { target: { value: null, name: "" } };
      event.target.value = new Date(newDate);
      event.target.name = name;
      setStartDate(newDate);
      onChange(event);
      inputElm.current.focus();
    } catch (error) {
      // setStartDate(d);
    }

    // console.log({ newDate, n: newDate.getTime(), ms: newDate.getMilliseconds() });
  };
  const handleCalendarClose = (e) => {
    const event = { target: { name, value: new Date(startDate) } };
    // console.log(`from date picker`, { event, inputElm });
    onBlur(event);

    // inputElm.current.blur();
  };
  const handleDateValueChange = (e) => {
    // const v = e.target.value;
    // console.log(`from value date input`, { value: v });
  };

  useEffect(() => {
    setStartDate(value ? new Date(value) : "");
    setIsDisplay(!!value);
  }, [value]); // eslint-disable-line
  return (
    <div className={`${className} ${uvStyle.muiDatePicker} `} style={style}>
      <DatePickerLib
        readOnly={readOnly}
        minDate={minDate}
        maxDate={maxDate}
        selected={startDate}
        onChange={handleDateClick}
        onBlur={handleCalendarClose}
        onCalendarClose={handleCalendarClose}
        popperPlacement={align}
        showTimeInput={includeTime}
        shouldCloseOnSelect={includeTime ? false : true}
        // peekNextMonth
        // showMonthDropdown
        // showYearDropdown
        // dropdownMode="select"

        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              padding: "3px 5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconLeft onClick={decreaseMonth} disabled={prevMonthButtonDisabled}></IconLeft>
            <select
              className="react-datepicker__year-select"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              className="react-datepicker__year-select"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <IconRight onClick={increaseMonth} disabled={nextMonthButtonDisabled}></IconRight>
          </div>
        )}
        customInput={
          <div className={`${uvStyle.inputWrapper} `}>
            <Input
              readOnly={readOnly}
              name={name}
              variant={variant}
              placeholder={placeholder}
              onChange={handleDateValueChange}
              value={isDisplay ? getFormat(startDate, getDateFormat(format, includeTime)) : ""}
              className={`${uvStyle.dateInput} ${inputClassName}`}
              style={{ textAlign: inputTextAlign }}
              getRef={(ref) => setInputElm(ref)}
            />
            {showDateIcon && (
              <DateIcon style={{ color: svgColor ? svgColor : "" }} className={`${uvStyle.dateDate} d-print-none `} />
            )}
          </div>
        }
        // dayClassName={(date) => {
        //   if (dayClassName) {
        //     return dayClassName(date);
        //   } else {
        //     if (date.getMonth() !== new Date().getMonth()) {
        //       return `${uvStyle.notThisMonth}`;
        //     }
        //   }
        // }}
        {...otherProps}
      >
        {includeTime && <div className={`${uvStyle.clickOut}`}>Click out side to close</div>}
      </DatePickerLib>
    </div>
  );
};

const getDateFormat = (format, includeTime) => {
  const trFormat = format;
  if (!!trFormat) {
    if (includeTime) {
      return `${trFormat} HH:mm a`;
    } else {
      return trFormat;
    }
  } else {
    if (includeTime) {
      return `dd/MM/yyyy HH:mm a`;
    } else {
      return "dd/MM/yyyy";
    }
  }
};

/*
{ value = new Date().getTime(), onChange,name, style,className })
*/
MuiDatePicker.propTypes = {
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  variant: PropTypes.string,
  svgColor: PropTypes.string,
  dayClassName: PropTypes.func,
  includeTime: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  style: PropTypes.any,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  inputTextAlign: PropTypes.string,
  name: PropTypes.string,
  format: PropTypes.string,
  align: PropTypes.oneOf([
    "auto",
    "auto-left",
    "auto-right",
    "bottom",
    "bottom-end",
    "bottom-start",
    "left",
    "left-end",
    "left-start",
    "right",
    "right-end",
    "right-start",
    "top",
    "top-end",
    "top-start",
  ]),
};

export default MuiDatePicker;
