import { round } from "../numbers/round";

/**
 * 
 * @param {any[]} collection 
 * @param {Function|Number} iterator 
 * @return {string}
 * @example 
 * r = finishRate([
       { task: "a", progress: "45" },
       { task: "a", progress: "50" },
       { task: "a", progress: "30" },
     ],
     (o) => o.progress);
   r = 41.67
 *
 */
const finishRate = (collection, iterator) => {
  let sum = 0;
  const flatProgress = collection.map((col) => {
    const d = typeof iterator === "function" ? iterator(col) : col;
    sum += +d;
    return d;
  });
  return round(sum / flatProgress.length);
};

export { finishRate };
