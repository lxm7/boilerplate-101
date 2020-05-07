import React, { Component } from "react";
import validator from "validator";
import * as R from "ramda";

// Selectors
const hasEmailError = formData => R.path(["email", "error"], formData);
const textFields = formData => R.pick(["name", "email", "message"], formData);
const noEmptyFields = formData =>
  Object.values(textFields(formData)).every(field => field.value);
class App extends Component {
  state = {
    response: "",
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
    responseToPost: "",
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
                  ? "Please use valid value"
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
      this.setState({ submitMessage: "Please fill in all fields" });
      return false;
    }

    if (hasEmailError(this.state.formData)) {
      this.setState({ submitMessage: "Please use a valid email" });
      return false;
    }

    this.setState({ submitMessage: "" });

    const response = await fetch("/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.formData })
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Tasty Treats Customer form:</strong>
          </p>
          <div>
            <label htmlFor="name">name</label>

            <input
              type="text"
              name="name"
              id="name"
              value={this.state.formData.name.value}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>

            <input
              type="text"
              name="email"
              id="email"
              value={this.state.formData.email.value}
              onChange={this.handleInputChange}
            />
            <span>
              {this.state.formData.email.error.length
                ? this.state.formData.email.error
                : ""}
            </span>
          </div>
          <div>
            <label htmlFor="message">message</label>

            <input
              type="text"
              name="message"
              id="message"
              value={this.state.formData.message.value}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="newsletter">Subscribe to newsletter?</label>

            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              onChange={this.handleInputChange}
            />
          </div>
          <p>{this.state.submitMessage}</p>
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>

        <a href={process.env.PUBLIC_URL + "/userList.txt"}>
          Go to Saved User List file
        </a>
      </div>
    );
  }
}

export default App;
