import { useState } from "react";
import { validTextFields, error } from "./utils";
import { ERROR, SENDING, initialState } from "./constants";

const useHandleForm = () => {
  const [state, setState] = useState(initialState);

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setState(prevState => ({
      ...prevState,
      submitMessage: "",
      formData: {
        ...prevState.formData,
        [target.name]: {
          value,
          error: error(target)
        }
      }
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Prevent submission if any fields are invalid
    if (!validTextFields(state.formData)) {
      return setState(prevState => ({
        ...prevState,
        submitMessage: ERROR.SUBMIT
      }));
    }

    // Set state for sending...
    setState(prevState => ({
      ...prevState,
      submitMessage: SENDING
    }));

    // const response =
    await fetch("/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: state.formData })
    });

    // re-write this in backend and res.send() for appropriate route (user-list)
    // const body = await response.text();
  };

  return {
    handleInputChange,
    handleSubmit,
    state
  };
};

export default useHandleForm;
