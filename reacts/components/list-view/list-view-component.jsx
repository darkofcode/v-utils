import React from "react";
import uvStyle from "./list-view-style.module.scss";
import LoadingComponent from "../mui-loading/loading-component";

export default function ListViewComponent({
  loading = false,
  ListComponents,
  FooterComponent,
  footerWrapperStyle = { justifyContent: "flex-end" },
  wrapperStyle,
}) {
  return (
    <div className={`${uvStyle.wrapper} `} style={wrapperStyle}>
      <LoadingComponent
        isLoading={loading}
        NotLoadingComponent={
          <>
            <div className={`${uvStyle.listWrapper} `}>{ListComponents}</div>
          </>
        }
      />
      <div className={`${uvStyle.pagination} `} style={footerWrapperStyle}>
        {FooterComponent}
      </div>
    </div>
  );
}
