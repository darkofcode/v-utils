import dfnFormat from "date-fns/format";

// dfnFormat = typeof dfnFormat === "function" ? dfnFormat : dfnFormat.default;

/**
 *
 * @param {Date} date
 * @param {string} format
 */
const getFormat = (date, format) => {
  try {
    const _date = date ? new Date(date) : new Date();
    return dfnFormat(_date, format);
  } catch (error) {
    return date;
  }
};

export { getFormat };
