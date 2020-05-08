// Refactor(?) this to be more like

// const formData = {
//   value: {
//     name: "",
//     email: "",
//     message: "",
//     newsletter: false,
//   },
//   error: {
//     name: "",
//     email: "",
//     message: "",
//     newsletter: undefined,
//   },
//   meta: {
//     isSubmitting: false,
//     isTouched: true,
//     fieldsAreValid: false,
//   },
// };

const initialState = {
  formData: {
    name: {
      value: "",
      error: ""
    },
    email: {
      value: "",
      error: ""
    },
    message: {
      value: "",
      error: ""
    },
    newsletter: false
  },
  submitMessage: ""
};

const ERROR = {
  TEXT_FIELD_EMPTY: "Please fill all text field",
  EMAIL_INVALID: "Invalid email address",
  SUBMIT: "Please check all fields correct"
};

const FIELD = {
  NAME: "name",
  EMAIL: "email",
  MESSAGE: "message"
};

const SENDING = "Sending...";

export { initialState, ERROR, FIELD, SENDING };
