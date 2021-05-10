const cleanResponse = (data) => {
  const strData = JSON.stringify(data);
  const regex = /\{("\$numberDecimal"):(.*?)\}/g;
  const newStrData = strData.replace(regex, (match, key, value) => {
    if (match) {
      return JSON.parse(value);
    }
  });
  return JSON.parse(newStrData);
};

export { cleanResponse };
