/**
 *
 * @param {number} mobileSize
 * @return {boolean}
 * @example
 * let t = isMobileScreen(600)
 * // t = true | false; depend on current screen size, not reactive
 */
function isMobileScreen(mobileSize = 600) {
  const w = window.innerWidth;
  return w <= mobileSize ? true : false;
}

export { isMobileScreen };
