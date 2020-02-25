const fetch = require("node-fetch");
const createFile = require("./createFile").default;

// eslint-disable-line no-restricted-globals
self.addEventListener("message", e => {
  if (!e) return;
  // TODO ? - if we had typical stuff needed for a request
  // const { token, endpoint, params } = e.data;

  fetch("https://uinames.com/api/?amount=25", {
    // for POSTS/PUTS...
    // method: "POST"
    // body: JSON.stringify(params),
    // headers: {
    //    Authorization: `Bearer ${token}`,
    //    Accept: "*/*"
    //    "content-type": "application/json"
    // }
  })
    .then(res => res.json())
    .then(data => ({ file: createFile(data), data }))
    .then(({ file, data }) => {
      postMessage({
        fileDownload: { file },
        users: data
      });
    })
    .catch(error => {
      console.error(error); // eslint-disable-line
    });
});
