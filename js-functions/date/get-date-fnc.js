const getDateFnc = (dateFnc) => {
  return typeof dateFnc === "function" ? dateFnc : dateFnc.default;
};
export { getDateFnc };
