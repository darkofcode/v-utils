import React from "react";
import uvStyle from "./wrapper-styles.module.scss";
import PropTypes from "prop-types";

// setting
import { size } from "uv-utils/reacts/components/mui-config/size";
import { colors } from "uv-utils/reacts/components/mui-config/colors";
import { getWindowHeight } from "uv-utils/js-functions/window/get-window-height";

// yub

// style
const bgStyle = {
  backgroundColor: colors.blueLight,
};
const getCollapseHeight = (isFullHeight) => {
  if (isFullHeight) {
    return { height: `${getWindowHeight() - 100}px` };
  } else {
    return {};
  }
};
// style={{ height: `${getWindowHeight() - 50 * 3}px` }}
const WrapperDynamic = ({
  minWidth = size.minWidth,
  maxWidth = size.maxWidth,
  isFullHeight = false,
  className,
  style,
  children,
}) => {
  // console.log("collapse list run", otherProps);

  return (
    <div className={`${uvStyle.wrapper}`}>
      <div
        className={`${className} ${uvStyle.collapseList}  shadow`}
        style={{ ...bgStyle, minWidth, maxWidth, ...style }}
      >
        <div style={{ ...getCollapseHeight(isFullHeight) }} className={`${uvStyle.collapseChild}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

WrapperDynamic.propTypes = {
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  isFullHeight: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.any,
};

export default WrapperDynamic;
