import { useEffect } from "react";
import isFunction from "lodash/isFunction";

/**
 *
 * @param {string} gName
 * @param {any} initValue
 * @param {boolean} isClear
 */
function useGlobal(gName, initValue = undefined, isClear = true) {
  const setTimeIds = (ids) => {
    if (isFunction(ids)) {
      return (window[gName] = ids(getTimeIds()));
    }
    window[gName] = ids;
  };
  const getTimeIds = () => (window[gName] ? window[gName] : initValue);

  useEffect(() => {
    return () => {
      if (isClear) {
        window[gName] = undefined;
      }
    };
  }, []); //eslint-disable-line
  return [getTimeIds, setTimeIds];
}

export default useGlobal;
