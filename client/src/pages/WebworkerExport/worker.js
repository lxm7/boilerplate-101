const fetch = require("node-fetch").default;
const convertToCSV = require("./convertToCSV").default;
const siftData = require("./siftData").default;

const title = "Breakingbad characters";

// eslint-disable-line no-restricted-globals
self.addEventListener("message", e => {
  if (!e) return;
  // TODO  - if we had typical stuff needed for a request
  // const { token, endpoint, params } = e.data;

  fetch("https://breakingbadapi.com/api/characters", {
    // for POSTS/PUTS...
    // method: "POST"
    // body: JSON.stringify(params),
    // headers: {
    //    Authorization: `Bearer ${token}`,
    //    Accept: "*/*"
    //    "content-type": "application/json"
    // }
  })
    .then(res => res.json()) // get json
    .then(data => siftData(data)) // retrieve the items we need
    .then(data => ({ file: convertToCSV(data), data }))
    .then(({ file, data }) => {
      postMessage({
        fileDownload: { file, title },
        users: data
      });
    })
    .catch(error => {
      console.error(error); // eslint-disable-line
    });
});
