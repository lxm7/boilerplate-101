import validator from "validator";

import { ERROR, FIELD } from "../constants";
import { EventTarget, FormData } from "../types";

export const isNewsletterField = (inputName: string) =>
  inputName === FIELD.NEWSLETTER;

export const getValue = (eventTarget: EventTarget) =>
  eventTarget.type === "checkbox" ? eventTarget.checked : eventTarget.value;

export const getError = (eventTarget: EventTarget) => {
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

const everyPropertyNotEmpty = (object: Partial<FormData>) =>
  Object.values(object).every(o => o !== "");

const everyPropertyIsEmpty = (object: Partial<FormData>) =>
  Object.values(object).every(o => o === "");

export const validate = (obj: FormData): Partial<FormData>[] | undefined[] => {
  if (everyPropertyNotEmpty(obj.values) && everyPropertyIsEmpty(obj.errors))
    return [];

  return [obj.errors];
};
