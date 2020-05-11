import { useState, useEffect } from "react";

import { getError, getValue } from "../utils";
import { formData } from "../constants";

const useForm = (validate, callback) => {
  const [state, setState] = useState(formData);

  // These local error states are here to isolate when useEffect is called within the hook just before we submit
  const [localErrors, setLocalErrors] = useState([]);

  // This allows us to check validation, fire notices, etc right before we make a request
  // by passing and exec callback under these conditions
  useEffect(() => {
    if (Object.keys(localErrors).length === 0 && state.meta.isSubmitting) {
      setState(prevState => ({
        ...prevState,
        meta: {
          ...prevState.meta,
          submitMessage: "Sending..."
        }
      }));
      callback(state.values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localErrors]);

  const handleOnChange = event => {
    event.persist();
    const target = event.target;

    setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [target.name]: getValue(target)
      },
      errors: {
        ...prevState.errors,
        [target.name]: getError(target)
      }
    }));
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setLocalErrors(validate(state));

    setState(prevState => ({
      ...prevState,
      meta: {
        ...prevState.meta,
        isSubmitting: true
      }
    }));
  };

  return {
    state,
    handleSubmit,
    handleOnChange
  };
};

export default useForm;
