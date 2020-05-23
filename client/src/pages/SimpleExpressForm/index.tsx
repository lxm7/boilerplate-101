import React from "react";
import jwt from "jsonwebtoken";

// Components
import Input from "./Input";
import Error from "./error";

// Hooks
import useForm from "./useForm";

// Utils
import { isNewsletterField, validate } from "./utils";
import { FormValues } from "./types";

const App = () => {
  const callbackSendUserForm = async (values: FormValues) => {
    try {
      // Obviously wouldn't do this in proper app
      const token = jwt.sign("fakeidfordemo", "secret123");
      // For now hard code our prod endpoint
      const url = "https://boilerplate-server-101.herokuapp.com/contact-form";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ post: values })
      });
    } catch (e) {
      console.error("Error fetching API", e);
    }

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

        {Object.keys(state.values).map(inputName => {
          return (
            <Input
              key={inputName}
              name={inputName}
              type={isNewsletterField(inputName) ? "checkbox" : "text"}
              value={state.values[inputName]}
              onChange={handleOnChange}
              validation={
                !isNewsletterField(inputName) && (
                  <Error message={state.errors[inputName] || ""} />
                )
              }
            />
          );
        })}

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
