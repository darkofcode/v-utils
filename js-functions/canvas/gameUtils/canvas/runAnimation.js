let frameNo = 0;
const bigBang = Date.now();
let start = Date.now();

/**
 *
 * @param {number} frameNoPerSecond
 * @param {()=>Void} onAnimate
 */
export function runAnimation(frameNoPerSecond, onAnimate) {
  const eachFrameTime = 1000 / frameNoPerSecond;
  if (Date.now() - start >= eachFrameTime) {
    frameNo++;
    start = Date.now();
    const elapse = Date.now() - bigBang;
    onAnimate(frameNo, elapse, eachFrameTime);
  }
  window.requestAnimationFrame(() => runAnimation(frameNoPerSecond, onAnimate));
}
