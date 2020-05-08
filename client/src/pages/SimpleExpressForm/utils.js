import * as R from "ramda";

export const hasEmailError = formData => R.path(["email", "error"], formData);

const textFields = formData => R.pick(["name", "email", "message"], formData);

export const noEmptyFields = formData =>
  Object.values(textFields(formData)).every(field => field.value);
