import { useState } from "react";

import { getError, getValue } from "../utils";
import { initialState } from "../constants";

const useFormState = () => {
  const [state, setState] = useState(initialState);

  const handleOnChange = event => {
    const target = event.target;

    setState(prevState => ({
      ...prevState,
      submitMessage: "",
      formData: {
        ...prevState.formData,
        [target.name]: {
          value: getValue(target),
          error: getError(target)
        }
      }
    }));
  };

  return {
    state,
    setState,
    handleOnChange
  };
};

export default useFormState;
