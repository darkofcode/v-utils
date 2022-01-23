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

function throttle(fn, delay) {
  if (delay === undefined) delay = 250;
  // console.log(`from th:\n`, delay);
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime < delay) return;
    lastTime = now;
    fn(...args);
  };
}

export { throttle };
