import https from "https";

/**
 *
 * @param {string} httpsUrl
 */
const fetch = (httpsUrl) => {
  return new Promise((resolve, reject) => {
    https
      .get(httpsUrl, function (resp) {
        var body = "";
        resp.on("data", function (data) {
          body += data;
        });

        resp.on("end", function () {
          // console.trace(`result from fetch`, body);
          resolve(JSON.parse(body));
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};

export { fetch };
