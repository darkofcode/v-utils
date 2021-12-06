import { useEffect, useState } from "react";
import { debounce } from "../../js-functions/utils/debounce";

/**
 *
 * @param {number} [threshold]
 * @returns {[boolean,{w:number,h:number}]}
 */
export default function useIsMobile(threshold = 600) {
  const [wh, setWH] = useState([getIsMobile(threshold), getWH()]);
  const handleWindowResize = debounce(() => {
    const wh = getWH();
    const isMobile = getIsMobile(threshold);

    setWH([isMobile, wh]);
  }, 250);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return wh;
}

const getIsMobile = (threshold) => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= threshold;
};
const getWH = () => {
  if (typeof window === "undefined") return { w: 2000, h: 800 };
  return { w: window.innerWidth, h: window.innerHeight };
};
