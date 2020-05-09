const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact-form", (req, res) => {
  const stringifyResponse = `${JSON.stringify(req.body.post)} \n`;

  try {
    fs.appendFileSync("client/Public/userList.txt", stringifyResponse, {
      flag: "a",
    });
  } catch (e) {
    console.log("ERROR", e);
  }

  res.send(
    `/contact-form: I received your POST request. This is what you sent me: ${JSON.stringify(
      req.body.post
    )}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
