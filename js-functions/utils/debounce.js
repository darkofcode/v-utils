/**
 *
 * @param {Function} fn
 * @param {number} delay
 * @returns
 *
 * @example
 *
 * const handleSearch = debounce((v)=>setValue(v),250);
 * <Input onChange={(e) => handleSearch(e.target.value)} />
 *
 */

function debounce(fn, delay = 250) {
  var timer = null;
  return function () {
    const args = arguments;
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

export { debounce };
