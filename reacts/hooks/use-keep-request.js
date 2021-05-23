const { useEffect } = require("react");

const useKeepRequest = (requestCallback, intervalMillisecond) => {
  const intervals = new Set();
  useEffect(() => {
    requestCallback();

    let RequestTime = setInterval(() => {
      requestCallback();
    }, intervalMillisecond);
    intervals.add(RequestTime);

    return () => {
      console.log(`from keep request cleaning`, { intervals });
      for (let id of intervals) {
        intervals.delete(id);
        clearInterval(id);
      }
    };
  }, []); // eslint-disable-line
  return intervals;
};

export default useKeepRequest;
