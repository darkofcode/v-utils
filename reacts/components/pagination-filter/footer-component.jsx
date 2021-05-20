import React, { useState } from "react";
import Pagination from "../mui-pagination-infinity/mui-pagination-infinity-component";
import Filter from "../mui-custom-icon/filter";
import uvStyle from "./style.module.scss";
import SelectObj from "../mui-auto-complete-simple";

export default function FooterComponent({ onChange, options = [], initPage = 1 }) {
  const [filter, setFilter] = useState(null);
  const [page, setPage] = useState(initPage);

  const handleSelectChange = (e) => {
    const v = e.target.value;
    setFilter(v);
    onChange(page, v);
  };
  const handlePageChange = (p) => {
    setPage(p);
    onChange(p, filter);
  };
  return (
    <div className={uvStyle.wrapper}>
      <div className={uvStyle.iconWrapper}>
        <Filter className={uvStyle.icon} />
        <SelectObj
          className={uvStyle.select}
          showCheckbox={false}
          variant="naked"
          value={filter}
          onChange={handleSelectChange}
          options={options}
        />
      </div>
      <Pagination current={page} onPageChange={handlePageChange} />
    </div>
  );
}
