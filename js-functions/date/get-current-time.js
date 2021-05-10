/**
 * @returns {number}
 */

function getCurrentTime(dateObj) {
  let d;
  if (dateObj) {
    d = dateObj;
  } else {
    d = new Date();
  }
  return (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()) * 1000 + d.getMilliseconds();
}

export { getCurrentTime };
