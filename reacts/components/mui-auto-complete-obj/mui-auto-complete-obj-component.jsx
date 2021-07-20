import React, { useState, Fragment, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import truncate from "lodash/truncate";
import { get } from "../../../js-functions/object/get";
import { findIndexOfCollection as findIndex } from "../../../js-functions/collection/find-index";
// import PropTypes from "prop-types";

import config from "../mui-config/config";
import Hidden from "@material-ui/core/Hidden";
import { sortCollection } from "../../../js-functions/collection/sort-collection";

// const filter = createFilterOptions();

const useStyles = (variant, popperColor) => {
  let border = "0px";
  let background = "#cecece";
  let color = "#383838";
  // let borderBottom = "0px solid #cecece";
  if (variant === "round") {
    border = "4px";
  }
  if (variant === "box") {
    border = "0px";
  }
  if (variant === "naked") {
    background = "transparent";
    color = "#cecece";
    // borderBottom = "1.5px solid #cecece";
  }

  return makeStyles({
    root: {
      borderRadius: border,
      // overflow: "hidden",
      background,
      color,
      // borderBottom,
    },
    tag: {
      color: "inherit",
      border: "1px solid grey",
      // borderColor: variant === "naked" ? "inherit" : "#626262",
      borderRadius: "4px",
      padding: "3px 6px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": {
        width: "12px",
        height: "12px",
        color: "grey",
        cursor: "pointer",
        marginLeft: "6px",
      },
    },
    arrow: {
      "& .MuiIconButton-root": {
        color: "inherit",
      },
    },
    input: {
      "& .MuiInput-underline:before": {
        borderBottomColor: config.colors.white,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: config.colors.greenLight,
      },
      "& .MuiInput-root": {
        backgroundColor: "transparent",
        color: "inherit",
        height: "auto",
        minHeight: "36.8px",
        "& input": {
          textTransform: "inherit",
        },
      },
    },
    paper: {
      backgroundColor: popperColor,
      fontSize: "0.8rem",
      fontFamily: `"Roboto", serif, "Hanuman"`,
    },
  });
};
const imgStyle = {
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  marginRight: "12px",
};
const Tag = ({ label, onDelete, maxTagLength, ...props }) => {
  return (
    <div {...props}>
      <span>{truncate(label, { length: maxTagLength })}</span>
      <CloseIcon className="d-print-none" fontSize="small" onClick={onDelete} />
    </div>
  );
};

const AutoCompleteObj = ({
  width,
  style,
  className,
  value,
  options: _options = [],
  onQuickAdd,
  limitTags = 2,
  multiple,
  label,
  onChange = () => {},
  onSelected = () => {},
  name,
  maxTagLength = 12,
  variant = "box",
  placeholder,
  error,
  readOnly,
  showCheckbox = true,
  isShowValue = true,
  inputClassName = "",
  popperColor = config.colors.success,
  sorted = {
    groupByKey: "",
    ascending: true,
    sortedFn: "string",
  },
  ...otherProps
}) => {
  const { groupByKey, ascending = true, sortedFn = "string" } = sorted;
  const options = groupByKey ? sortCollection(groupByKey, _options, ascending, sortedFn) : _options;

  // console.log(`from auto complete`, { sorted });
  const getDefaultValue = (value) => {
    // console.log("from get default", { value, options });
    try {
      if (!multiple) {
        const index = findIndex("id", value.id, options);
        return index >= 0 ? options[index] : null;
      }
      if (multiple) {
        let r = [];
        value.forEach((val) => {
          let i = findIndex("id", val.id, options);
          if (i >= 0) {
            r.push(options[i]);
          }
        });
        // console.log("from auto completes", { r, value });

        return r;
      }
    } catch (error) {
      return null;
    }
  };
  // console.log("from auto complete obj val", { value });
  const classes = useStyles(variant, popperColor)();
  // console.log("get default value", getDefaultValue(), options);

  const [initValue, setInitValue] = useState(getDefaultValue(value));

  // eslint-disabled-next-line
  const handleChange = (targetElm, selectedValue) => {
    if (readOnly) return;
    let quickAdd;
    // console.log("on auto complete change", { selectedValue, targetElm });

    try {
      if (multiple && selectedValue) {
        quickAdd = selectedValue[selectedValue.length - 1].inputValue;
      } else {
        quickAdd = selectedValue.inputValue;
      }
    } catch (error) {
      quickAdd = null;
    }

    if (quickAdd) {
      const addValue = quickAdd.replace(/(Quick Add )|"/gi, "");
      return onQuickAdd(addValue);
    } else {
      let event = {
        target: {
          name,
          value: selectedValue,
        },
      };
      // targetElm.value = selectedValue;
      // targetElm.name = name;
      // event.target = targetElm;

      // console.log(event);

      onChange(event);
      onSelected(event);
      return setInitValue(selectedValue);
    }
  };

  // for display selected item
  const renderTags = (tagValue, getTagProps) => {
    if (multiple && tagValue) {
      return tagValue.map((option, index) => (
        <Tag label={option.value} maxTagLength={maxTagLength} {...getTagProps({ index })} />
      ));
    }
    return;
  };
  // for display option item
  const renderOption = (option, { selected }) => {
    if (option.id) {
      return (
        <React.Fragment>
          <Hidden xsDown>
            {showCheckbox && <Checkbox color="default" style={{ marginRight: 8 }} checked={selected} />}
          </Hidden>
          {!!option.path && <img style={imgStyle} src={option.path} alt="imgPath" />}
          {!!option.value && <span>{option.value}</span>}
        </React.Fragment>
      );
    }
    if (option.inputValue) {
      return <span>{option.inputValue}</span>;
    }
  };

  // filter option case input ele not found
  const filterOptions = (options, params) => {
    let filtered = [];
    const len = options.length;
    let include = false;
    for (let i = 0; i < len; i++) {
      const opt = options[i];
      const value = get(opt, "value", "").toString().toLocaleLowerCase();
      const id = get(opt, "id", "").toString().toLocaleLowerCase();

      let input = params.inputValue.toString().toLocaleLowerCase();
      if (value.includes(input) || id.includes(input)) {
        filtered.push(opt);
        include = true;
      }
    }
    if (onQuickAdd) {
      if (params.inputValue !== "" && params.inputValue.length >= 3) {
        if (!include) {
          filtered.push({
            inputValue: `Quick Add "${params.inputValue}"`,
          });
        }
      }
    }
    return filtered;
  };

  // multiple = false,
  // to display single select when click on quick add
  const getOptionLabel = (option) => {
    // console.log(`from get option lalbel`, option);
    if (!option) {
      return "";
    }
    if (option.id) {
      // return truncate(option, { length: maxTagLength });
      return isShowValue ? get(option, "value", "") : get(option, "id", "");
    }
    if (option.inputValue) {
      const addValue = option.inputValue.replace(/(Quick Add )|"/gi, "");
      return addValue;
    }
    return typeof option === "string" ? option : JSON.stringify(option);
  };
  // option label be to display
  useEffect(() => {
    setInitValue(getDefaultValue(value));

    // console.log({ value, options });
    // eslint-disable-next-line
  }, [value, _options]);
  return (
    <Fragment>
      {options && (
        <Autocomplete
          style={{ width, ...style }}
          className={className}
          value={initValue}
          disableCloseOnSelect={multiple}
          multiple={multiple}
          limitTags={limitTags}
          classes={{
            tag: classes.tag,
            root: classes.root,
            endAdornment: classes.arrow,
            paper: popperColor ? classes.paper : null,
            groupLabel: popperColor ? classes.paper : null,
          }}
          onChange={handleChange}
          renderTags={renderTags}
          getOptionLabel={getOptionLabel}
          getOptionSelected={(option, value) => option.id === value.id}
          renderOption={renderOption}
          options={options}
          // autoSelect={false}
          renderInput={(params) => (
            <TextField
              error={error}
              placeholder={placeholder}
              classes={{ root: classes.input }}
              name={name}
              {...params}
            />
          )}
          filterOptions={filterOptions}
          {...otherProps}
        />
      )}
    </Fragment>
  );
};

// const optionType = PropTypes.shape({
//   id: PropTypes.any.isRequired,
//   value: PropTypes.any,
//   path: PropTypes.string,
// });

// AutoCompleteObj.propTypes = {
//   value: PropTypes.oneOfType([optionType, PropTypes.arrayOf(optionType)]),
//   options: PropTypes.arrayOf(optionType).isRequired,
//   limitTags: PropTypes.number,
//   maxTagLength: PropTypes.number,
//   style: PropTypes.any,
//   width: PropTypes.string,
//   placeholder: PropTypes.string,
//   className: PropTypes.string,
//   multiple: PropTypes.bool,
//   onChange: PropTypes.func,
//   onQuickAdd: PropTypes.func,
//   popperColor:PropTypes.string
// };

export default AutoCompleteObj;

/**
 * 
const ExampleComponent = () => {
  const handleQuickAdd = (value) => {
    console.log("quick add run from parent", value);
  };
  const handleChange = (e) => {
    console.log(e);
    // e.target.value = "..."
  };
  return (
    <Form autoComplete="off" style={{ padding: "48px" }}>
      <AutoComplete multiple limitTags={2} maxTagLength={12} options={simpleOptions} onQuickAdd={handleQuickAdd} onChange={handleChange} />
      <AutoComplete  options={simpleOptions}  onChange={handleChange} />
    </Form>
  );
};
 */
