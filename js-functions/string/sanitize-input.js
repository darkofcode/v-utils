import { noWhiteSpace } from "./no-white-space";
import { suspiciousInput } from "./suspicious-inputs";
import { replaceAll } from "./replace-all";
import forIn from "lodash/forIn";
import valuesIn from "lodash/valuesIn";
import keysIn from "lodash/keysIn";
import { isEmpty } from "../object/is-obj-empty";

/**
 *
 * @param {string} inputStringOrJsonString
 * @param {boolean} includeWhiteSpace default false
 * @param {number} maxKeysInputLength default 30
 * @param {number} maxEachValueInput default 300
 * @return {string | false} return string | false; false when bad request, otherwise string
 * let r = sanitizeInput("a $gt /etc/shadow java\0script")
 * r = "a"
 */

const sanitizeInput = (
  inputStringOrJsonString,
  includeWhiteSpace = false,
  maxKeysInputLength = 30,
  maxEachValueInput = 300
) => {
  let cleanInput;
  let newInputObj = {};
  // case input is json string
  // console.trace(`input string from sanitizer:\n`, inputStringOrJsonString);
  // console.trace(`input json:\n`, JSON.parse(inputStringOrJsonString));
  try {
    let inputObj = JSON.parse(inputStringOrJsonString);

    // check if exceed max input
    if (keysIn(inputObj).length > maxKeysInputLength) {
      return false;
    }

    if (!isInputsValid(valuesIn(inputObj), maxEachValueInput)) {
      return false;
    }

    if (!includeWhiteSpace) {
      forIn(inputObj, (value, key) => {
        newInputObj[key] = noWhiteSpace(value);
      });
      cleanInput = JSON.stringify(newInputObj);
    } else {
      cleanInput = inputStringOrJsonString;
    }

    // case input is normal string
  } catch (error) {
    if (!isInputsValid([inputStringOrJsonString], maxEachValueInput)) {
      return false;
    }
    cleanInput = includeWhiteSpace ? inputStringOrJsonString : noWhiteSpace(inputStringOrJsonString);
  }

  suspiciousInput.forEach((models) => {
    models.patterns.forEach((pattern) => {
      if (isEmpty(newInputObj)) {
        cleanInput = replaceAll(cleanInput, pattern, "");
      } else {
        keysIn(newInputObj).forEach((key) => {
          newInputObj[key] = replaceAll(newInputObj[key], pattern, "");
        });
        cleanInput = JSON.stringify(newInputObj);
      }
    });
  });

  return includeWhiteSpace ? cleanInput : noWhiteSpace(cleanInput);
};

const isInputsValid = (inputs, maxLength) => {
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    if (typeof input !== "string") {
      return false;
    }
    if (input.length > maxLength) {
      return false;
    }
  }
  return true;
};

export { sanitizeInput };
