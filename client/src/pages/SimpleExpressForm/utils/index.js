import validator from "validator";

import { ERROR, FIELD } from "../constants";

export const isNewsletterField = inputName => inputName === FIELD.NEWSLETTER;

export const getValue = eventTarget =>
  eventTarget.type === "checkbox" ? eventTarget.checked : eventTarget.value;

export const getError = eventTarget => {
  switch (eventTarget.name) {
    case FIELD.NAME:
    case FIELD.MESSAGE:
      return validator.isEmpty(eventTarget.value) ? ERROR.TEXT_FIELD_EMPTY : "";
    case FIELD.EMAIL:
      return !validator.isEmail(eventTarget.value) ? ERROR.EMAIL_INVALID : "";
    default:
      return "";
  }
};

const everyPropertyNotEmpty = object =>
  Object.values(object).every(o => o !== "");

const everyPropertyIsEmpty = object =>
  Object.values(object).every(o => o === "");

export const validate = obj => {
  if (everyPropertyNotEmpty(obj.values) && everyPropertyIsEmpty(obj.errors))
    return [];

  return [obj.errors];
};
