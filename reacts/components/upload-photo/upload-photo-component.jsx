import React, { useState, Fragment } from "react";
import Button from "../mui-button/mui-button-component";
import { resizeCroppedImage } from "uv-utils/js-functions/node/resize-cropped-image";
import UploadHorizon from "../upload-photo-horizon";

const ModalUploadPhoto = ({
  onClose,
  onUpload,
  isLoading,
  isSquareImage = true,
  noImageMessage = "work best with SQUARED png image!",
  sizeLimitInKb = 1000,
  imageType = "jpeg",
  imagePath = "",
}) => {
  const [imgData, setImgData] = useState(null);
  const [crop, setCrop] = useState(null);

  const handleCroppedImage = (img, crop) => {
    setCrop(crop);
    setImgData(img);
  };

  const handleUpload = async () => {
    const resizedImgBlob = resizeCroppedImage(imgData, crop, sizeLimitInKb, imageType);
    await onUpload(resizedImgBlob);
  };
  return (
    <Fragment>
      <UploadHorizon
        imgText={noImageMessage}
        wrapperClassName="mt-3"
        imgHeight="240px"
        onCropChange={handleCroppedImage}
        imgPath={imagePath}
        isSquareImage={isSquareImage}
      />
      <div className="text-right">
        <Button size="small" onClick={() => onClose(false)} className="mr-2" text="cancel" color="success" />
        <Button
          size="small"
          disabled={!crop}
          isLoading={isLoading}
          onClick={handleUpload}
          text="upload"
          color="success"
        />
      </div>
    </Fragment>
  );
};

export default ModalUploadPhoto;
