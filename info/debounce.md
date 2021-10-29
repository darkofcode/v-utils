# Debounce

## react example

```javascript
function debounce(fn, delay) {
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
/*
let me explain,
first handleSearch = function () {
    const args = [v]
    clearTimeout(timer);
    timer = setTimeout(() => {
      (v)=>setSearch(v)
    }, 1000);
  };
whenever on change call faster than 1000ms, setSearch is not execute,
only the last change will be execute with 1000ms time delay
*/

const handleSearch = debounce((v) => {
  setSearch(v);
}, 1000);

<Input className={uvStyle.searchInput} variant="naked" onChange={(e) => handleSearch(e.target.value)} />;
```
