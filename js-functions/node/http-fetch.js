import http from "http";

/**
 *
 * @param {string} httpsUrl
 */
const fetch = (httpsUrl) => {
  return new Promise((resolve, reject) => {
    http
      .get(httpsUrl, function (resp) {
        var body = "";
        resp.on("data", function (data) {
          body += data;
        });

        resp.on("end", function () {
          resolve(JSON.parse(body));
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};

export { fetch };
