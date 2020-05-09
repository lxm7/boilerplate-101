import React from "react";

// Components
import Input from "./input";
import Error from "./error";

// Hooks
import useFormState from "./useFormState";
import useFormSubmit from "./useFormSubmit";

// Utils
import { isNewsletterField } from "./utils";

const App = () => {
  const { state, setState, handleOnChange } = useFormState();
  const { handleSubmit } = useFormSubmit(state, setState);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Tasty Treats Customer form:</strong>
        </p>

        {Object.keys(state.formData).map(inputName => (
          <Input
            key={inputName}
            name={inputName}
            type={isNewsletterField(inputName) ? "checkbox" : "text"}
            value={state.formData[inputName].value}
            onChange={handleOnChange}
            validation={
              <Error
                inputName={inputName}
                message={state.formData[inputName].error}
              />
            }
          />
        ))}

        <p>{state.submitMessage}</p>

        <button type="submit">Submit</button>
      </form>

      <a
        style={{ display: "block", marginTop: "2em" }}
        href={process.env.PUBLIC_URL + "/userList.txt"}
      >
        Go to Saved User List file
      </a>
    </div>
  );
};

export default App;
