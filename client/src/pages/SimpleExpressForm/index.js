import React from "react";

import Input from "./input";
import useHandleForm from "./useHandleForm";

const App = () => {
  const { state, handleInputChange, handleSubmit } = useHandleForm();
  const { formData } = state;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Tasty Treats Customer form:</strong>
        </p>

        {Object.keys(formData).map(inputName => (
          <Input
            key={inputName}
            name={inputName}
            type={inputName === "newsletter" ? "checkbox" : "text"}
            value={formData[inputName].value}
            onChange={handleInputChange}
            validation={
              <span>
                {inputName !== "newsletter" && formData[inputName].error.length
                  ? formData[inputName].error
                  : ""}
              </span>
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
