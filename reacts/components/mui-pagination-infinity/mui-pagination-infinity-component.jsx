import React, { useRef, useEffect } from "react";
import uvStyle from "./mui-pagination-infinity-styles.module.scss";

// icon
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";

const MuiPagination = ({ current = 1, onPageChange, maxPage = 100, className }) => {
  const [pageNo, setPageNo] = useState(current);
  const pageRef = useRef();
  const handleChange = (event) => {
    const { value } = event.target;
    // console.log({ nan: isNaN(pageRef.current.value), input: pageRef.current.value, value });
    const reg = /^[0-9\b]+$/;
    if (value === "" || reg.test(value)) {
      setPageNo(value);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      pageRef.current.blur();
    }
  };
  const handleBlur = () => {
    if (pageRef.current.value === "") {
      // console.log({ nan: isNaN(pageRef.current.value), input: pageRef.current.value });

      setPageNo(1);
      onPageChange(1);
      return;
    }
    const value = parseInt(pageRef.current.value);
    if (value <= 0) {
      setPageNo(1);
      onPageChange(1);
    } else if (value >= maxPage) {
      setPageNo(maxPage);
      onPageChange(maxPage);
    } else {
      setPageNo(value);
      onPageChange(value);
    }
  };

  const handleDecrease = () => {
    setPageNo((pre) => {
      const next = pre - 1;
      if (next <= 0) {
        onPageChange(1, false);
        return 1;
      } else {
        onPageChange(next, false);
        return next;
      }
    });
  };
  const handleIncrease = () => {
    setPageNo((pre) => {
      const next = pre + 1;
      onPageChange(next, true);
      return next;
    });
  };
  useEffect(() => {
    setPageNo(current);
  }, [current]);
  return (
    <div className={`${uvStyle.pagination} ${className}`}>
      <IconButton onClick={handleDecrease} size="small" color="inherit">
        <ChevronLeft fontSize="small" />
      </IconButton>
      <input
        ref={pageRef}
        name="page"
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        value={pageNo}
        className={`${uvStyle.naked} `}
        type="text"
        autoComplete="off"
      />

      <IconButton onClick={handleIncrease} size="small" color="inherit">
        <ChevronRight fontSize="small" />
      </IconButton>
    </div>
  );
};
MuiPagination.propTypes = {
  className: PropTypes.string,
  current: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default MuiPagination;
