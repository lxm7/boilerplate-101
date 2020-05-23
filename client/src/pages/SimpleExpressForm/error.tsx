import React from "react";

const Error = ({ message }: { message: string }) => (
  <span>{message ? message : ""}</span>
);

export default Error;
