import React, { useState } from "react";
import uvStyle from "./style.module.scss";
import Modal from "../mui-modal/dynamic";
import IconPlus from "@material-ui/icons/ZoomInOutlined";
import IconMinus from "@material-ui/icons/ZoomOutOutlined";
import Draggable from "react-draggable";

export default function ImageZoom({ title, isFullScreen, loading, imgSrc, maxWidth, onClose, open, Footer }) {
  const [imgScale, setImgScale] = useState(1);

  const zoomFactor = 0.03;
  const handleZoomPlus = () => {
    setImgScale((pre) => pre + zoomFactor);
  };
  const handleZoomMinus = () => {
    setImgScale((pre) => pre - zoomFactor);
  };
  const handleScroll = (e) => {
    const delta = e.deltaY > 0 ? -zoomFactor : +zoomFactor;
    setImgScale((pre) => pre + delta);
  };

  return (
    <Modal
      maxWidth={maxWidth}
      isFullScreen={isFullScreen}
      open={open}
      title={title}
      onClose={() => onClose()}
      component={
        <>
          {loading ? (
            <div>loading...</div>
          ) : (
            <div className={uvStyle.wrapper}>
              <div onWheel={handleScroll}>
                <div className={uvStyle.iconWrapper}>
                  <IconPlus className={uvStyle.icon} onClick={handleZoomPlus} />
                  <IconMinus className={uvStyle.icon} onClick={handleZoomMinus} />
                </div>

                <div className={uvStyle.zoomWrapper}>
                  <Draggable>
                    <div className={`${uvStyle.zoom}`}>
                      <img
                        style={{ pointerEvents: "none", transform: `scale(${imgScale})` }}
                        src={imgSrc}
                        alt="attachment"
                      />
                    </div>
                  </Draggable>
                </div>
              </div>
              <div className={uvStyle.footerWrapper}>{Footer}</div>
            </div>
          )}
        </>
      }
    />
  );
}
