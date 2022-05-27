
/**
 * this function will run first last and 
 * throttle in the middle with limit interval
 * @param {Function} callback 
 * @param {number} limit 
 * @returns 
 * @example
 * 
 * const handleMove = throttle((e)=>{'do s.th'},150);
 * elm.addEventListener('mousemove',handleMove)
 */

export function throttle(callback, limit) {
  let nextExeTime = 0;
  let timeOut;
  return function (...args) {
    if (timeOut) clearTimeout(timeOut);

    if (Date.now() - nextExeTime >= limit) {
      nextExeTime = Date.now() + limit;
      callback(...args);
    } else {
      timeOut = setTimeout(() => {
        callback(...args);
      }, limit);
    }
  };
}

