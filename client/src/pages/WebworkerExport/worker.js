const fetch = require("node-fetch").default;
const convertToCSV = require("./convertToCSV").default;
const siftData = require("./siftData").default;

const title = "Breakingbad characters";

// eslint-disable-line no-restricted-globals
export function process() {
  return fetch("https://breakingbadapi.com/api/characters")
    .then(res => res.json()) // get json
    .then(data => siftData(data)) // retrieve the items we need
    .then(data => ({ file: convertToCSV(data), data }))
    .then(({ file, data }) => ({
      fileDownload: { file, title },
      users: data
    }))
    .catch(error => {
      console.error(error); // eslint-disable-line
    });
}
