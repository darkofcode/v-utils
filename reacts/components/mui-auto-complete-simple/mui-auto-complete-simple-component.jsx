import React, { useState, useEffect } from "react";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
// import truncate from "lodash/truncate";
import Hidden from "@material-ui/core/Hidden";
import config from "../mui-config/config";
import { sortCollection } from "../../../js-functions/collection/sort-collection";
import { isMobileScreen } from "uv-utils/js-functions/window/is-mobile-screen";

const filter = createFilterOptions();

const useStyles = (variant, popperColor) => {
  let border = "0px";
  let background = "#cecece";
  let color = "#383838";
  let nothing = false;
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
  if (variant === "nothing") {
    nothing = true;
    background = "transparent";
    color = "#cecece";
  }
  return makeStyles({
    root: {
      borderRadius: border,
      background,
      color,
      // borderBottom: borderBottom,
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
    input: {
      "& .MuiInput-underline:before": {
        borderBottomColor: config.colors.white,
        borderBottom: nothing ? "none" : "1px solid",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: config.colors.greenLight,
      },
      "& .MuiInput-root": {
        backgroundColor: "transparent",
        color: "inherit",
        height: "auto",
        minHeight: "36.8px",
      },
    },
    inputElm: {
      fontSize: "0.7rem",
    },
    arrow: {
      "& .MuiIconButton-root": {
        color: "inherit",
      },
    },
    paper: {
      backgroundColor: popperColor,
      fontSize: "0.8rem",
      fontFamily: `"Roboto", serif, "Hanuman"`,
    },
    clearBtn: {
      pointerEvents: "none",
      display: "none",
    },
    // inputClassName: inputClassName,
  });
};
const Tag = ({ label, onDelete, ...props }) => {
  return (
    <div {...props}>
      <span>{label}</span>
      <CloseIcon className="d-print-none" fontSize="small" onClick={onDelete} />
    </div>
  );
};
export default ({
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
  // maxTagLength = 12,
  variant = "round",
  placeholder,
  showCheckbox = true,
  // inputClassName = "",
  error,
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

  const getDefaultValue = (value) => {
    if (typeof value === "string") {
      return value ? value : null;
    }
    if (value) {
      let r = [];
      value.forEach((val) => {
        let i = options.indexOf(val);
        if (i >= 0) {
          r.push(options[i]);
        }
      });
      return r;
    }
    return null;
  };
  const classes = useStyles(variant, popperColor)();
  const [initValue, setInitValue] = useState(getDefaultValue(value));

  // eslint-disable-next-line
  const handleChange = (targetElm, selectedValue) => {
    let quickAdd;
    // console.log("quick add", selectedValue);

    try {
      if (multiple) {
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
    if (multiple) {
      return tagValue.map((option, index) => <Tag label={option} {...getTagProps({ index })} />);
    }
    return;
  };
  // for display option item
  const renderOption = (option, { selected }) => {
    if (typeof option === "string") {
      return (
        <React.Fragment>
          <Hidden xsDown>
            {showCheckbox && <Checkbox color="default" style={{ marginRight: 8 }} checked={selected} />}
          </Hidden>
          {option}
        </React.Fragment>
      );
    }
    if (option.inputValue) {
      return <span>{option.inputValue}</span>;
    }
  };

  // filter option case input ele not found
  const filterOptions = (options, params) => {
    const filtered = filter(options, params);
    if (onQuickAdd) {
      let include = false;
      if (params.inputValue !== "" && params.inputValue.length >= 3) {
        for (let i = 0; i < options.length; i++) {
          if (options[i].toString().toLocaleLowerCase().includes(params.inputValue.toString().toLocaleLowerCase())) {
            include = true;
            break;
          }
        }
        if (!include) {
          filtered.push({
            inputValue: `Quick Add "${params.inputValue}"`,
          });
        }
      }
    }

    return filtered;
  };
  const getOptionLabel = (option) => {
    if (typeof option === "string") {
      // return truncate(option, { length: maxTagLength });
      return option;
    }
    if (option.inputValue) {
      const addValue = option.inputValue.replace(/(Quick Add )|"/gi, "");
      return addValue;
    }
  };

  useEffect(() => {
    setInitValue(getDefaultValue(value));
    // eslint-disable-next-line
  }, [value, _options]);
  // option label be to display
  return (
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
        clearIndicator: isMobileScreen() ? classes.clearBtn : undefined,
      }}
      onChange={handleChange}
      renderTags={renderTags}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      options={options}
      renderInput={(params) => (
        <TextField error={error} classes={{ root: classes.input }} placeholder={placeholder} name={name} {...params} />
      )}
      filterOptions={filterOptions}
      {...otherProps}
    />
  );
};

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
