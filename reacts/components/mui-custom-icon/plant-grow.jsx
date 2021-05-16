import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/plant-grow.svg";

const mStyle = {
  display: "flex",
};
const PlantGrow = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon fontSize="inherit" style={{ ...style, ...mStyle }} {...otherProps} component={Icon} viewBox="0 0 86 151" />
  );
};

export default PlantGrow;
