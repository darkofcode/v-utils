/*
useEffect(() => {
  let start: number | undefined;
  let previousTimestamp: number =0;
  let runAnimation = true;
  function step(timestampInMs: number) {
    if (start === undefined) {
      start = timestampInMs;
      previousTimestamp = timestampInMs;
    }
    const elapsed = timestampInMs - start;
    const delta = timestampInMs - (previousTimestamp as number);
    previousTimestamp = timestampInMs;
    console.log("ani run", { elapsed, timestampInMs, delta });
    if (runAnimation) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);

  return () => {
    console.log("set animation to stop");
    runAnimation = false;
  };
}, []); // eslint-disable-line

*/
