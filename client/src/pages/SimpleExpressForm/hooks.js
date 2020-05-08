import React, { useState } from "react";
import validator from "validator";
import { hasEmailError, noEmptyFields } from "./utils";
import MESSAGE, { initialState } from "./constants";

const useForm = () => {
  const [state, setState] = useState(initialState);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!noEmptyFields(state.formData)) {
      setState(prevState => ({
        ...prevState,
        submitMessage: MESSAGE.ALL_TEXT_FIELDS
      }));
      return false;
    }

    if (hasEmailError(state.formData)) {
      setState(prevState => ({
        ...prevState,
        submitMessage: MESSAGE.INVALID_EMAIL
      }));
      return false;
    }

    setState(prevState => ({
      ...prevState,
      submitMessage: ""
    }));

    const response = await fetch("/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: state.formData })
    });

    const body = await response.text();

    setState(prevState => ({
      ...prevState,
      submitMessage: JSON.stringify(body)
    }));
  };

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState(prevState => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [name]: {
          value,
          ...(name === "email"
            ? {
                error: !validator.isEmail(target.value)
                  ? MESSAGE.INVALID_EMAIL
                  : ""
              }
            : null)
        }
      }
    }));
  };

  return {
    handleInputChange,
    handleSubmit,
    state
  };
};

export default useForm;
