const asyncHandler = require("../utils/try-catch-handler.js");
const { suspiciousInput } = require("../string/suspicious-inputs");
const { get } = require("../object/get");

async function handleSuspiciousRequest(request, response, next) {
  response.status(403).send("Untrusted Request Detected");
  return;
}

/**
 *
 * @typedef {import('../string/suspicious-inputs.js').sus} sus
 *
 */

/**
 *
 * @param {{bodyLength:number,blackLists:sus[]}} [setting]
 * @returns {(res,res,next)=>void}
 * @default {{bodyLength:16000,blackLists:suspiciousInput}}
 */
const mdProtectorRequest = (setting = {}) =>
  asyncHandler(async (request, response, next) => {
    let { bodyLength, blackLists } = setting;
    if (!bodyLength) bodyLength = 16000;
    if (!blackLists) blackLists = suspiciousInput;

    var url = get(request, "originalUrl", get(request, "url", "")).toLowerCase();
    var bodyObj = request.body || {};

    if (url == undefined || url == null) {
      next();
      return;
    }
    // check input overall length
    if (JSON.stringify(bodyObj).length > bodyLength) {
      await handleSuspiciousRequest(request, response, next);
      return;
    }

    for (var i = 0; i != blackLists.length; i++) {
      // var category = blackLists[i].category;
      var patterns = blackLists[i].patterns;

      for (var j = 0; j != patterns.length; j++) {
        const pattern = patterns[j].toLowerCase();
        // url check
        if (
          url.includes(pattern) ||
          decodeURI(url).includes(pattern) ||
          decodeURIComponent(url).includes(pattern)
        ) {
          await handleSuspiciousRequest(request, response, next);
          return;
        }

        // body check

        let value = JSON.stringify(bodyObj).toLocaleLowerCase();
        if (
          value.includes(pattern) ||
          decodeURI(value).includes(pattern) ||
          decodeURIComponent(value).includes(pattern)
        ) {
          await handleSuspiciousRequest(request, response, next);

          return;
        }
      }
    }

    next();
  });

export default mdProtectorRequest;
