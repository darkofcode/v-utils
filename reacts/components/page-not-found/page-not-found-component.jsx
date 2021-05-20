import React from "react";
import uvStyle from "./page-not-found-styles.module.scss";

import Button from "@material-ui/core/Button";
import { useRouteMatch, Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageNotFound = ({ to }) => {
  const { url } = useRouteMatch();
  console.log("from page not found", { url });

  return (
    <div className={` ${uvStyle.pageNotFound} `}>
      <div className={`${uvStyle.code} ${uvStyle.upper}`}>404</div>
      <div className={uvStyle.pageWrapper}>
        <div className={`${uvStyle.page} ${uvStyle.upper}`}>the page</div>
        <div className={`${uvStyle.notFound} ${uvStyle.upper}`}>was not found</div>
      </div>

      <Link to={to ? to : url}>
        <Button variant="contained" color="secondary" style={{ height: "48px" }}>
          Back Home
        </Button>
      </Link>
    </div>
  );
};
PageNotFound.propTypes = {
  to: PropTypes.string,
};

export default PageNotFound;
