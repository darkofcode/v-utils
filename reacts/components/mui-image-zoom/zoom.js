import React from "react";
import uvStyle from "./style.module.scss";
import Modal from "uv-utils/reacts/components/mui-modal/dynamic";
import IconPlus from "@material-ui/icons/ZoomInOutlined";
import IconMinus from "@material-ui/icons/ZoomOutOutlined";
import { useState } from "react";
/**
  open: boolean;
  onClose: Function;
  title?: string;
  maxWidth?: "lg" | "md" | "sm" | "xl" | "xs" | false;
  component: ReactNode;
  isFullScreen?: boolean;
 */
export default function ImageZoom({ title, isFullScreen, imgSrc, maxWidth, onClose, open }) {
  const [imgHeight, setImgHeight] = useState(142);
  const zoomFactor = 15;
  const handleZoomPlus = () => {
    setImgHeight((pre) => pre - zoomFactor);
  };
  const handleZoomMinus = () => {
    setImgHeight((pre) => pre + zoomFactor);
  };
  const handleScroll = (e) => {
    const delta = e.deltaY > 0 ? zoomFactor : -zoomFactor;
    setImgHeight((pre) => pre + delta);
  };
  return (
    <Modal
      maxWidth={maxWidth}
      isFullScreen={isFullScreen}
      open={open}
      title={title}
      onClose={() => onClose()}
      component={
        <div onWheel={handleScroll} className={uvStyle.zoomWrapper} style={{ height: `calc(100vh - ${imgHeight}px)` }}>
          <div className={uvStyle.iconWrapper}>
            <IconPlus className={uvStyle.icon} onClick={handleZoomPlus} />
            <IconMinus className={uvStyle.icon} onClick={handleZoomMinus} />
          </div>
          <img className={`${uvStyle.zoom}`} src={imgSrc} alt="attachment" />
        </div>
      }
    />
  );
}
