const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("This is the boilerplate-101 api"));

// This handles react router in production when it get bundled
// to build folder, we need to declare them here for serving them in prod
app.use(express.static(path.join(__dirname, "client/build")));

// This is for simple express form
app.post("/contact-form", (req, res) => {
  const stringifyResponse = `${JSON.stringify(req.body.post)} \n`;

  try {
    fs.appendFileSync("client/public/userList.txt", stringifyResponse, {
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

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
