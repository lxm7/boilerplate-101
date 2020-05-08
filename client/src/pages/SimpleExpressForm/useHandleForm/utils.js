import * as R from "ramda";
import validator from "validator";

import { ERROR, FIELD } from "./constants";

export const textFields = formData =>
  R.pick([FIELD.NAME, FIELD.EMAIL, FIELD.MESSAGE], formData);

export const validTextFields = formData =>
  Object.values(textFields(formData)).every(
    field => field.value && !field.error.length
  );

export const error = eventTarget => {
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
