import React, { useEffect, useState } from "react";
import ImageCrop from "../image-crop/image-crop-component";
import MuiUploadBtn from "../mui-upload-btn/mui-upload-btn-component";

const UploadPhotoHorizon = ({
  wrapperStyle,
  wrapperClassName,
  isSquareImage = true,
  imgText = "work best with square image",
  imgHeight,
  imgPath = "",
  btnWidth,
  btnColor,
  btnText,
  onCropChange,
  imgSource = null,
  onImgSourceChange = () => {},
}) => {
  const [imgSrc, setImgSrc] = useState(imgSource);
  const [imgData, setImgData] = useState(null);

  const handleSelectImage = (files) => {
    // console.log("file from select", files);
    if (files && files.length) {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => {
          setImgSrc(reader.result);
          onImgSourceChange(reader.result);
        },
        false
      );
      reader.readAsDataURL(files[0]);
    }
  };

  const handleCroppedImage = (crop) => {
    // console.log(`from crop upload photo`, {});
    onCropChange(imgData, crop);
  };
  const handleImageLoaded = (image) => {
    setImgData(image);
  };
  useEffect(() => {
    setImgSrc(imgSource);
  }, [imgSource]);
  // console.log(`from photo horizon`, { imgPath, imgSrc, show: !imgPath || imgSrc });
  return (
    <div style={wrapperStyle} className={`${wrapperClassName}`}>
      <MuiUploadBtn text={btnText} color={btnColor} width={btnWidth} onChange={handleSelectImage} />
      {!imgPath || imgSrc ? (
        <ImageCrop
          imageFile={imgSrc}
          onImageLoaded={handleImageLoaded}
          onCropChange={handleCroppedImage}
          noImageMessage={imgText}
          isSquareImage={isSquareImage}
          imgHeight={imgHeight}
        />
      ) : (
        <div className="flex flex-center" style={{ margin: "12px 0" }}>
          <img alt="" src={imgPath} style={{ height: imgHeight }} />
        </div>
      )}
    </div>
  );
};

export default UploadPhotoHorizon;
