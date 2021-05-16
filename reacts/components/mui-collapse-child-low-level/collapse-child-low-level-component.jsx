import React, { useContext } from "react";
import uvStyle from "./collapse-child-low-level-styles.module.scss";
import PropTypes from "prop-types";
import Loading from "../mui-loading/loading-component";
//icon
import ChevronRight from "@material-ui/icons/ChevronRight";

import IconButton from "@material-ui/core/IconButton";
//action
import Rotate from "../rotate/rotate-component";

import { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import { useEffect } from "react";

// setting
import { getWindowHeight } from "../../../js-functions/window/get-window-height";
import { CollapseContext } from "../mui-collapse-child-search-report/collapse-context";
import { get } from "../../../js-functions/object/get";

// yub

// style
const getCollapseHeight = (isFullHeight) => {
  if (isFullHeight) {
    return { height: `${getWindowHeight() - 150}px` };
  } else {
    return {};
  }
};
// style={{ height: `${getWindowHeight() - 50 * 3}px` }}
const CollapseListDynamic = ({
  minWidth = "345px",
  maxWidth = "650px",
  isFullHeight = false,
  component,
  title,
  isListOpen,
  className,
  style,
  keepAlive = true,
  wrapperPadding = "24px",
  wrapperStyle,
  headerIconComponent,
  loading = false,
}) => {
  // console.log("collapse list run", isListOpen);

  const [list, setList] = useState(false);
  const [listCollapse, setListCollapse] = useState(false);
  const [rotationArrow, setRotationArrow] = useState(false);
  const { searchStyle } = useContext(CollapseContext);
  const searchOpacity = +get(searchStyle, "opacity", 0);
  // console.log(`from collapse low level`, { searchStyle, searchOpacity });
  let timeOut = null;

  const handleToggleList = () => {
    if (!keepAlive) {
      if (list) {
        timeOut = setTimeout(() => {
          setList((pre) => !pre);
        }, 300);
      } else {
        clearTimeout(timeOut);
        setList((pre) => !pre);
      }
    } else {
      setList(true);
    }

    setListCollapse((pre) => !pre);
    setRotationArrow((pre) => !pre);
  };

  useEffect(() => {
    if (isListOpen) {
      setList(true);
      setListCollapse(true);
      setRotationArrow(true);
    } else {
      setList(false);
      setListCollapse(false);
      setRotationArrow(false);
    }

    // handle component will unmount
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line
  }, [isListOpen]);

  return (
    <div className={`${uvStyle.wrapper}`} style={{ padding: wrapperPadding, ...wrapperStyle }}>
      <div
        className={`${className} ${uvStyle.collapseList}  shadow`}
        style={{ background: "rgb(37, 108, 141)", minWidth, maxWidth, ...style }}
      >
        {/* header  */}
        <div className={`${uvStyle.headerWrapper}`}>
          <Rotate
            onClick={handleToggleList}
            isCollapse={rotationArrow}
            degree={90}
            component={
              <IconButton color="inherit">
                <ChevronRight />
              </IconButton>
            }
          />
          <div className={`${uvStyle.headerIcon}`}>
            <div style={{ opacity: searchOpacity === 1 ? 0 : 1 }} className={`${uvStyle.title}`}>
              {title}
            </div>
            <div className={uvStyle.flexCenter}>{headerIconComponent}</div>
          </div>
        </div>

        {/* list items */}
        <Loading
          isLoading={loading}
          NotLoadingComponent={
            <Collapse in={listCollapse}>
              {list && (
                <div style={{ ...getCollapseHeight(isFullHeight) }} className={`${uvStyle.collapseChild}`}>
                  {component}
                </div>
              )}
            </Collapse>
          }
        />
      </div>
    </div>
  );
};

CollapseListDynamic.propTypes = {
  component: PropTypes.element.isRequired,
  title: PropTypes.any.isRequired,
  isListOpen: PropTypes.bool,
  keepAlive: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  headerIconComponent: PropTypes.element.isRequired,
  loading: PropTypes.bool,
};

export default CollapseListDynamic;
