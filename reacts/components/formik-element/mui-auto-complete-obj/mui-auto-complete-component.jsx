import React from "react";
// import uvStyle from "./mui-auto-complete-styles.module.scss";
import uvStyle from "../formik-elm-styles.module.scss";
import { isMobileScreen } from "../../../../js-functions/window/is-mobile-screen";
import AutoComplete from "../../mui-auto-complete-obj/mui-auto-complete-obj-component";

/*
const FormikAutocomplete = ({ textFieldProps, ...props }) => {
  const {
    form: { setTouched, setFieldValue }
  } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
    <Autocomplete
      {...props}
      {...field}
      onChange={(_, value) => setFieldValue(name, value)}
      onBlur={() => setTouched({ [name]: true })}
      getOptionSelected={(item, current) => item.value == current.value}
      renderInput={props => (
        <TextField
          {...props}
          {...textFieldProps}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
};



*/

const MuiInput = ({
  field = {},
  form = {},
  label,
  labelWidth = "",
  inputWidth = "",
  className = "",
  inputClassName = "",
  includeLabelError = true,
  style,
  width,
  loading,
  justInput = false,
  columnOnMobile = true,
  ...otherProps
}) => {
  const { dirty, errors = {} } = form;
  const fieldError = dirty && !!errors[field.name];
  const styleLabel = { width: labelWidth };
  // console.log({ form, field });

  const getTextFieldStyle = { width: isMobileScreen() ? "100%" : inputWidth };
  const getWidth = isMobileScreen() ? (justInput ? width : "100%") : width;
  return (
    <div className={`${uvStyle.wrapper} ${className}`} style={{ ...style, width: getWidth }}>
      <div className={` ${uvStyle.inputWrapper} ${columnOnMobile ? uvStyle.mWrapper : ""}`}>
        {!justInput && (
          <span className={`${columnOnMobile ? uvStyle.mWrapper : ""}`} style={styleLabel}>
            {label}
          </span>
        )}
        {loading ? (
          <div style={{ ...getTextFieldStyle }}>loading...</div>
        ) : (
          <AutoComplete
            error={fieldError}
            {...field}
            {...otherProps}
            style={{ ...getTextFieldStyle }}
            className={` ${inputClassName} `}
          />
        )}
      </div>
      <div className={`${uvStyle.inputWrapper} `}>
        <div style={styleLabel} className={`${uvStyle.invisible}`}></div>
        {fieldError && includeLabelError && <div className={` label-error`}>{errors[field.name]}</div>}
      </div>
    </div>
  );
};

export default MuiInput;
