export const initialState = {
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

const MESSAGE = {
  ALL_TEXT_FIELDS: "Please fill all text fields",
  INVALID_EMAIL: "Invalid email address"
};

export default MESSAGE;
