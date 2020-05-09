// Refactor(?) this to be more like

const formData = {
  values: {
    name: "",
    email: "",
    message: "",
    newsletter: false
  },
  errors: {},
  meta: {
    isSubmitting: false,
    submitMessage: ""
  }
};

const ERROR = {
  TEXT_FIELD_EMPTY: "Please fill all text field",
  EMAIL_INVALID: "Invalid email address",
  SUBMIT: "Please check all fields correct"
};

const FIELD = {
  NAME: "name",
  EMAIL: "email",
  MESSAGE: "message",
  NEWSLETTER: "newsletter"
};

const SENDING = "Sending...";

export { formData, ERROR, FIELD, SENDING };
