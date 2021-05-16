import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

export const setCookie = (name, value = "", options) => {
  if (!isBrowser) return;

  const optionsWithDefaults = {
    days: 7,
    path: "/",
    ...options,
  };

  const expires = new Date(Date.now() + optionsWithDefaults.days * 864e5).toUTCString();

  document.cookie =
    name +
    "=" +
    encodeURIComponent(JSON.stringify(value)) +
    "; expires=" +
    expires +
    "; path=" +
    optionsWithDefaults.path;
};

export const getCookie = (name, initialValue = "") => {
  const init =
    isBrowser &&
    document.cookie.split("; ").reduce((r, v) => {
      const parts = v.split("=");
      return parts[0] === name ? JSON.parse(decodeURIComponent(parts[1])) : r;
    }, "");
  return init !== undefined || init !== "" ? init : initialValue;
};
/**
 *
 * @param {string} key
 * @param {string} initialValue
 */
export default function useCookie(key, initialValue, options) {
  const [item, setItem] = useState(getCookie(key, initialValue));

  const updateItem = (value) => {
    setItem(value);
    setCookie(key, value, options);
  };
  useEffect(() => {
    const init = getCookie(key);
    // console.log(`from effect use cookie`, init);
    if (init !== undefined || init !== "") return;
    // setCookie(key, initialValue, options);
    updateItem(initialValue);
  }, []); //eslint-disable-line
  return [item, updateItem];
}
