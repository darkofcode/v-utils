import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/plant-sprout.svg";

const mStyle = {
  display: "flex",
};
const PlantSprout = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon fontSize="inherit" style={{ ...style, ...mStyle }} {...otherProps} component={Icon} viewBox="0 0 83 152" />
  );
};

export default PlantSprout;
