import React from "react";
import Button from "@material-ui/core/Button";
import uvStyle from "./style.module.scss";

const ActiveUser = ({ logo, path, name, onClick = () => {}, imgStyle }) => {
  return (
    <Button onClick={() => onClick()} style={{ textTransform: "capitalize", color: "inherit", minWidth: "0" }}>
      {logo ? (
        logo
      ) : (
        <div className={uvStyle.imgWrapper}>
          <img style={imgStyle} className={` ${uvStyle.img} `} src={path} alt="userPhoto" />
        </div>
      )}
      <span className={uvStyle.name}>{name}</span>
    </Button>
  );
};
// UserLogo.propTypes = {
// }

export default ActiveUser;
