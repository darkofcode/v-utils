import React, { useState } from "react";
import uvStyle from "./collapse-child-search-report-styles.module.scss";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Collapse from "../mui-collapse-child-low-level/collapse-child-low-level-component";
import InputSearch from "../mui-search/mui-search-component";
import IconButton from "@material-ui/core/IconButton";
import IconSearch from "@material-ui/icons/Search";
import IconReport from "@material-ui/icons/TrendingUp";
import IconCheck from "@material-ui/icons/CheckCircle";
import IconImport from "@material-ui/icons/GetApp";
import { getDateFromString } from "../../../js-functions/date/get-date-from-string";
import { isEmpty } from "../../../js-functions/object/is-empty";
import { schemaSearch } from "./schema-search";
import Snack from "../mui-snackbar/mui-snackbar-component";
import { CollapseContext } from "./collapse-context";
import { colors } from "../mui-config/colors";

export default function CollapseChild({
  dateFormat: propDateFormat = "yyyy-MM-dd",
  minInputLength = 3,
  onReportClick,
  onSearchSubmit,
  onAddList,
  onImportClick,
  ...otherProps
}) {
  const [inputStyle, setInputStyle] = useState({ width: "0px", opacity: 0, right: "0px" });
  const [input, setInput] = useState("");
  const [openSnack, setOpenSnack] = useState("");
  const dateFormat = propDateFormat;
  const placeholders = [dateFormat, "123", "any text", "123 - 145", `${dateFormat} - ${dateFormat}`];
  const handleSearchClick = () => {
    setInput("");
    if (inputStyle.opacity === 1) {
      onSearchSubmit("");
    }

    setInputStyle((pre) => {
      const input = pre.width === "0px" ? { width: `calc(100% - 96px)`, opacity: 1 } : { width: "0px", opacity: 0 };
      const other = pre.right === "0px" ? "-144px" : "0px";

      return { ...input, right: other };
    });
  };

  const handleSearchSubmit = async () => {
    const _input = await getEvalInput(input);
    onSearchSubmit(_input);
  };
  const handleChange = (e) => {
    const v = e.target.value;
    setInput(v);
    if (!v) {
      onSearchSubmit(v);
    }
  };
  const handleKeyDown = async (e) => {
    // console.log(`from collapse key down`, { k: e.key, c: e.keyCode });
    const v = e.target.value;
    // case enter
    if (e.keyCode === 13 && v.length >= minInputLength) {
      const _input = await getEvalInput(v);
      onSearchSubmit(_input);
    }
  };
  const getEvalInput = async (str) => {
    try {
      const _input = _getEvalInput(str);
      await schemaSearch.validate(_input);
      return _input;
    } catch (error) {
      // console.log(`from collapse type error`, error);
      setOpenSnack(error.message);
      return "";
    }
  };
  const _getEvalInput = (string) => {
    const date = getDateFromString(string, dateFormat);
    const number = string.match(/\d{3,19}/g);
    const r = { date: [], number: [], string: "" };
    if (!isEmpty(date)) return { ...r, date: date.slice(0, 2) };
    if (number) return { ...r, number: number.slice(0, 2) };
    return { ...r, string };
  };
  return (
    <>
      <CollapseContext.Provider
        value={{
          searchStyle: inputStyle,
        }}
      >
        <Collapse
          headerIconComponent={
            <>
              {!!onSearchSubmit && (
                <>
                  <InputSearch
                    className={`${uvStyle.input} ${uvStyle.animation}`}
                    variant="naked"
                    style={{ ...inputStyle, backgroundColor: colors.blueLight }}
                    onChange={handleChange}
                    value={input}
                    onKeyDown={handleKeyDown}
                    placeholder={getPickRndArray(placeholders)}
                  />
                  <div
                    className={`${uvStyle.search} ${uvStyle.animation}`}
                    style={{
                      right: inputStyle.opacity
                        ? `-${getInputWidth(onReportClick, onAddList, onImportClick)}px`
                        : "0px",
                      position: "relative",
                    }}
                  >
                    {inputStyle.opacity === 1 && (
                      <IconButton disabled={input.length < minInputLength} color="inherit" onClick={handleSearchSubmit}>
                        <IconCheck />
                      </IconButton>
                    )}
                    <IconButton color="inherit" onClick={handleSearchClick}>
                      <IconSearch />
                    </IconButton>
                  </div>
                </>
              )}

              {!!onImportClick && (
                <IconButton
                  className={`${uvStyle.animation}`}
                  style={{ right: inputStyle.right, position: "relative" }}
                  color="inherit"
                  onClick={() => onImportClick()}
                >
                  <IconImport />
                </IconButton>
              )}
              {!!onReportClick && (
                <IconButton
                  className={`${uvStyle.animation}`}
                  style={{ right: inputStyle.right, position: "relative" }}
                  color="inherit"
                  onClick={() => onReportClick()}
                >
                  <IconReport />
                </IconButton>
              )}
              {!!onAddList && (
                <IconButton
                  className={`${uvStyle.animation}`}
                  style={{ right: inputStyle.right, position: "relative" }}
                  onClick={() => onAddList()}
                  color="inherit"
                >
                  <PlaylistAddIcon />
                </IconButton>
              )}
            </>
          }
          {...otherProps}
        />
      </CollapseContext.Provider>
      <Snack
        type="error"
        autoHideDuration={7500}
        open={!!openSnack}
        onClose={() => setOpenSnack("")}
        message={openSnack}
      />
    </>
  );
}

const getInputWidth = (onReportClick, onAddList, onImportClick) => {
  const search = 0;
  const report = !!onReportClick ? 1 : 0;
  const add = !!onAddList ? 1 : 0;
  const _import = !!onImportClick ? 1 : 0;
  let width = report + search + add + _import;
  // width = width >= 1 ? width : 1;
  width = width * 48;
  return width;
};

const getPickRndArray = (arr = []) => {
  const max = arr.length;
  const i = Math.floor(Math.random() * max);
  return arr[i];
};
