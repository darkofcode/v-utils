import React from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Icon } from "../assets/images/plant-garden.svg";

const mStyle = {
  display: "flex",
};
const PlantGarden = (props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ ...style, ...mStyle }}
      {...otherProps}
      component={Icon}
      viewBox="0 0 100 152"
    />
  );
};

export default PlantGarden;
