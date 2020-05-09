import { validTextFields } from "../utils";
import { ERROR, SENDING } from "../constants";

const useFormSubmit = (formState, setFormState) => {
  const handleSubmit = async e => {
    e.preventDefault();

    // Prevent submission if any fields are invalid
    if (!validTextFields(formState.formData)) {
      return setFormState(prevState => ({
        ...prevState,
        submitMessage: ERROR.SUBMIT
      }));
    }

    // Set state for sending...
    setFormState(prevState => ({
      ...prevState,
      submitMessage: SENDING
    }));

    // const response =
    await fetch("/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: formState.formData })
    });

    // re-write this in backend and res.send() for appropriate route (user-list)
    // const body = await response.text();
  };

  return {
    handleSubmit
  };
};

export default useFormSubmit;
