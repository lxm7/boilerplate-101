import * as R from "ramda";
import validator from "validator";

import { ERROR, FIELD } from "../constants";

export const textFields = formData =>
  R.pick([FIELD.NAME, FIELD.EMAIL, FIELD.MESSAGE], formData);

export const isNewsletterField = inputName => inputName === FIELD.NEWSLETTER;

export const validTextFields = formData =>
  Object.values(textFields(formData)).every(
    field => field.value && !field.error.length
  );

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
