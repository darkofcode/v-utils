import React from "react";
import uvStyle from "./mui-upload-btn-styles.module.scss";
// import Button from "@material-ui/core/Button";
import Button from "../mui-button";
import PropTypes from "prop-types";
import IconPhoto from "@material-ui/icons/Photo";
import { useRef } from "react";

const MuiUploadBtn = ({
  onChange,
  text = "select photo",
  acceptFile = "image/*",
  multiple = false,
  width = "100%",
  color,
  ...others
}) => {
  const btnRef = useRef();
  const handleSelectFile = () => {
    btnRef.current.click();
  };
  const handleFileChange = (e) => {
    const files = e.target.files;
    onChange(files);
  };
  return (
    <Button color={color} wrapperStyle={{ width }} {...others} onClick={handleSelectFile}>
      <input
        onChange={(e) => handleFileChange(e)}
        accept={acceptFile}
        ref={btnRef}
        type="file"
        className={`${uvStyle.input}`}
        multiple={multiple}
      />
      <IconPhoto style={{ marginRight: "6px" }} />
      {text}
    </Button>
  );
};

MuiUploadBtn.propTypes = {
  onChange: PropTypes.func.isRequired,
  acceptFile: PropTypes.string,
  multiple: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
};

/*
const _Upgrade = ({ errors, values }) => {
  // console.log({ setting });
  const [imgSrc, setImgSrc] = useState(null);
  const handleSelectImage = (files) => {
    // console.log("file from select", files);
    if (files && files.length) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImgSrc(reader.result), false);
      reader.readAsDataURL(files[0]);
    }
  };
  return <div>
    <SelectImg width="168px" onChange={handleSelectImage} text="Select Receipt" />
  
  </div>
}

*/

export default MuiUploadBtn;
