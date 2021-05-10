const subtraction = (mainArray, otherArray) => {
  return mainArray.filter((x) => !otherArray.includes(x));
};

export { subtraction };
