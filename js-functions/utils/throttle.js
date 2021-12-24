/**
 * this function only fire at regular pace
 * @param {Function} fn
 * @param {number} delay
 * @returns
 *
 * @example
 *
 * const handleScroll = throttle((v)=>setValue(v),250);
 *
 *
 */

function throttle(fn, delay = 250) {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime < delay) return;
    lastTime = now;
    fn(...args);
  };
}

export { throttle };
