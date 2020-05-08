import React, { Component } from "react";
import validator from "validator";
import { hasEmailError, noEmptyFields } from "./utils";
import Input from "./input";

// constants
const MESSAGE_ALL_TEXT_FIELDS = "Please fill in all text fields";
const MESSAGE_INVALID_EMAIL = "Please use a valid email";
class App extends Component {
  state = {
    formData: {
      name: {
        value: "",
        error: ""
      },
      email: {
        value: "",
        error: ""
      },
      message: {
        value: "",
        error: ""
      },
      newsletter: false
    },
    submitMessage: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [name]: {
          value,
          ...(name === "email"
            ? {
                error: !validator.isEmail(target.value)
                  ? MESSAGE_INVALID_EMAIL
                  : ""
              }
            : null)
        }
      }
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (!noEmptyFields(this.state.formData)) {
      this.setState({ submitMessage: MESSAGE_ALL_TEXT_FIELDS });
      return false;
    }

    if (hasEmailError(this.state.formData)) {
      this.setState({ submitMessage: MESSAGE_INVALID_EMAIL });
      return false;
    }

    this.setState({ submitMessage: "" });

    // const response =
    await fetch("/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.formData })
    });

    // handleResponseUpdate = () => // make use if this later
    // const body = await response.text();
    // this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Tasty Treats Customer form:</strong>
          </p>
          <Input
            name={"name"}
            type={"text"}
            value={this.state.formData.name.value}
            onChange={this.handleInputChange}
          />
          <Input
            name={"email"}
            type={"text"}
            value={this.state.formData.email.value}
            onChange={this.handleInputChange}
            validation={
              <span>
                {this.state.formData.email.error.length
                  ? this.state.formData.email.error
                  : ""}
              </span>
            }
          />
          <Input
            name={"message"}
            type={"text"}
            value={this.state.formData.message.value}
            onChange={this.handleInputChange}
          />
          <Input
            name={"newsletter"}
            type={"checkbox"}
            value={this.state.formData.newsletter.value}
            onChange={this.handleInputChange}
          />
          <p>{this.state.submitMessage}</p>
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
  }
}

export default App;
