import React from "react";
import uvStyle from "./style.module.scss";
import Modal from "../modal/dynamic";
import IconPlus from "@material-ui/icons/ZoomInOutlined";
import IconMinus from "@material-ui/icons/ZoomOutOutlined";
import IconReset from "@material-ui/icons/Cached";

import Draggable from "react-draggable";
import useLocalStorage from "../../hooks/use-local-storage";
import toCamel from "lodash/camelCase";
// import { get } from "@uv-commons/js-functions/object/get";

export default function ImageZoom({
  title,
  isFullScreen,
  loading,
  imgSrc,
  maxWidth,
  onClose,
  open,
  Footer,
  localKey = "xyz-uv-xyz",
}) {
  const [imgScale, setImgScale] = useLocalStorage(toCamel(`${localKey}-img-sca`), 1);
  const [position, setPosition] = useLocalStorage(toCamel(`${localKey}-img-pos`), null);
  const zoomFactor = 0.03;
  const handleZoomPlus = () => {
    setImgScale((pre) => {
      const r = (getImgScale(pre) + zoomFactor).toFixed(4);
      return +r <= 0.25 ? "0.25" : r;
    });
  };
  const handleZoomMinus = () => {
    setImgScale((pre) => {
      const r = (getImgScale(pre) - zoomFactor).toFixed(4);
      return +r <= 0.25 ? "0.25" : r;
    });
  };
  const handleScroll = (e) => {
    const delta = e.deltaY > 0 ? -zoomFactor : +zoomFactor;
    setImgScale((pre) => {
      const r = (getImgScale(pre) + delta).toFixed(4);
      return +r <= 0.25 ? "0.25" : r;
    });
  };

  const handleDrag = (e, pos) => {
    const { x, y } = pos;
    setPosition({ x, y });
  };

  const getImgScale = (v) => {
    return isNaN(+v) ? 1 : +v;
  };
  const handleReset = () => {
    setImgScale(1);
    setPosition({ x: 0, y: 0 });
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
                  <IconReset className={uvStyle.icon} onClick={handleReset} />
                </div>

                <div className={uvStyle.zoomWrapper}>
                  <Draggable position={position} onStop={handleDrag}>
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
