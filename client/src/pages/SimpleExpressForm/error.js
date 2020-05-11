import React from "react";

import { isNewsletterField } from "./utils";

const Error = ({ inputName, message }) => <span>{message ? message : ""}</span>;

export default Error;
