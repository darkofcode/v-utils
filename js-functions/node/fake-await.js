/**
 *
 * @param {number} awaitSecond
 * @returns
 */
const fakeAwait = (awaitSecond) => {
  return new Promise((resolve, reject) => {
    const wait = +awaitSecond * 1000;
    setTimeout(() => {
      resolve();
    }, wait);
  });
};
