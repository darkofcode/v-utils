import addMonths from "date-fns/addMonths";
import { getRandomInteger } from "../numbers/random";

/**
 *
 * @param {string|Date} startDate
 * @param {string|Date} endDate
 * @return {Date}
 */
const getRandomDate = (startDate, endDate) => {
  if (!startDate && !endDate) {
    startDate = addMonths(new Date(), -1);
    endDate = addMonths(new Date(), 1);
  }
  const sDate = typeof startDate === "string" ? new Date(startDate) : startDate;
  const eDate = typeof endDate === "string" ? new Date(endDate) : endDate;
  const nDate = getRandomInteger(sDate.getTime(), eDate.getTime());

  // console.log(`from rnd Date`, { startDate, endDate, sDate, eDate, nDate });
  return new Date(nDate);
};

// const a0 = getRandomDate();
// const a1 = getRandomDate(new Date("2021-01-01"), new Date("2021-03-01"));
// const a2 = getRandomDate("2021-01-01", "2021-03-01");
// const a3 = getRandomDate("2021-01-01", "2021-01-05");

// console.log({ a0, a1, a2, a3 });

export { getRandomDate };
