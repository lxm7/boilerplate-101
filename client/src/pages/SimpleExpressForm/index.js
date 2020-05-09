import React from "react";

// Components
import Input from "./input";
import Error from "./error";

// Hooks
import useForm from "./useForm";

// Utils
import { isNewsletterField, validate } from "./utils";

const App = () => {
  const callbackSendUserForm = async values => {
    await fetch("/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: values })
    });

    console.info("no errors, user details posting...");
  };

  const { state, handleOnChange, handleSubmit } = useForm(
    validate,
    callbackSendUserForm
  );

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Tasty Treats Customer form:</strong>
        </p>

        {Object.keys(state.values).map(inputName => (
          <Input
            key={inputName}
            name={inputName}
            type={isNewsletterField(inputName) ? "checkbox" : "text"}
            value={state.values[inputName]}
            onChange={handleOnChange}
            validation={
              <Error inputName={inputName} message={state.errors[inputName]} />
            }
          />
        ))}

        <p>{state.meta.submitMessage}</p>

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
