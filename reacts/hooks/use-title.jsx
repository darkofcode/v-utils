import { useEffect, useState } from "react";

/**
 *
 * @param {string} title
 * @param {string} titleId
 * @returns {[title:string,setTitle:Function]}
 */
function useTitle(title, titleId) {
  const [_title, setTitle] = useState(title);
  const elm = document.getElementById(titleId);
  const updateTitle = (v) => {
    if (!elm) return;
    setTitle(v);
    elm.innerText = _title;
  };
  useEffect(() => {
    if (elm) {
      elm.innerText = _title;
    }
  }, [elm]); //eslint-disable-line
  return [_title, updateTitle];
}

export { useTitle };
