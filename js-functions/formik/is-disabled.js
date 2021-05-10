import { isEmpty } from "../object/is-empty";

const isDisabled = (dirty, errors) => {
  const isError = !isEmpty(errors);
  if (isError === false && dirty === false) {
    return true;
  }
  if (isError === false && dirty === true) {
    return false;
  }
  if (isError === true && dirty === true) {
    return true;
  }
  if (isError === true && dirty === false) {
    return true;
  }
};
export { isDisabled };
