import React, { useEffect } from "react";
import uvStyle from "./loading-styles.module.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

const Loading = ({
  isLoading,
  NotLoadingComponent,
  className,
  size = 40,
  middleScreen = false,
  onFinishedLoading = () => {},
}) => {
  const pos = () => (middleScreen ? `${uvStyle.middle}` : `${uvStyle.loading}`);

  useEffect(() => {
    if (!isLoading) {
      onFinishedLoading();
    }
  }, [isLoading]); // eslint-disable-line
  return (
    <>
      {isLoading ? (
        <div className={`${className} ${uvStyle.flexCenter} ${pos()} `}>
          <CircularProgress color="inherit" size={size} />
        </div>
      ) : (
        <>{NotLoadingComponent}</>
      )}
    </>
  );
};
Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  NotLoadingComponent: PropTypes.element,
};
export default Loading;
