import React from "react";
import Input from "./input";

import useForm from "./hooks";

const App = () => {
  const { state, handleInputChange, handleSubmit } = useForm();

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Tasty Treats Customer form:</strong>
        </p>
        <Input
          name={"name"}
          type={"text"}
          value={state.formData.name.value}
          onChange={handleInputChange}
        />
        <Input
          name={"email"}
          type={"text"}
          value={state.formData.email.value}
          onChange={handleInputChange}
          validation={
            <span>
              {state.formData.email.error.length
                ? state.formData.email.error
                : ""}
            </span>
          }
        />
        <Input
          name={"message"}
          type={"text"}
          value={state.formData.message.value}
          onChange={handleInputChange}
        />
        <Input
          name={"newsletter"}
          type={"checkbox"}
          value={state.formData.newsletter.value}
          onChange={handleInputChange}
        />
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
