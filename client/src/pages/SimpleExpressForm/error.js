import React from "react";

import { isNewsletterField } from "./utils";

const Error = ({ inputName, message }) => (
  <span>{!isNewsletterField(inputName) && message?.length ? message : ""}</span>
);

export default Error;
