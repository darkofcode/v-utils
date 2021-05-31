import React, { useEffect, useState } from "react";
import uvStyle from "./image-crop-styles.module.scss";
import PropTypes from "prop-types";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const defaultCrop = {
  // x: 10,
  // y: 10,
  // width: 80,
  // height: 80,
};
const ImageCrop = ({
  cropOption = defaultCrop,
  isSquareImage = true,
  imageFile,
  onCropChange,
  onImageLoaded,
  noImageMessage = "work best with png image",
  imgHeight = "320px",
  imgMaxHeight = "450px",
  imgMinWidth = "450px",
  ...otherProps
}) => {
  const getCropOption = () => (isSquareImage ? { ...cropOption, aspect: 16 / 16 } : cropOption);
  const [crop, setCrop] = useState(getCropOption());
  // const [imgData, setImgData] = useState(null);

  const handleImageLoaded = (image) => {
    // setImgData(image);
    onImageLoaded(image);
  };

  const onCropComplete = (crop) => {
    // console.log(`from upload crop`, { crop, imgData });
    if (crop.height === 0) {
      return onCropChange(null);
      // return onCropChange({ ...crop, x: 0, y: 0, height: imgData.height, width: imgData.width });
    }
    onCropChange(crop);
  };

  const handleCropChange = (crop) => {
    setCrop(crop);
  };

  useEffect(() => {
    // setImgData(imageFile);
    onImageLoaded(imageFile);
    setCrop(getCropOption());
  }, [imageFile]); //eslint-disable-line

  return (
    <div style={{ height: imgHeight, maxHeight: imgMaxHeight }} className={`${uvStyle.wrapper}`}>
      <div className={`${uvStyle.imageWrapper}`} style={{ minWidth: imgMinWidth }}>
        {imageFile ? (
          <ReactCrop
            {...otherProps}
            src={imageFile}
            crop={crop}
            onImageLoaded={handleImageLoaded}
            onComplete={onCropComplete}
            onChange={handleCropChange}
            imageStyle={{
              width: "auto",
              maxHeight: imgMaxHeight,
              height: imgHeight,
            }}
          />
        ) : (
          <div>{noImageMessage}</div>
        )}
      </div>
    </div>
  );
};

ImageCrop.propTypes = {
  onCropChange: PropTypes.func.isRequired,
  imageFile: PropTypes.any,
  cropOption: PropTypes.any,
};

export default ImageCrop;
