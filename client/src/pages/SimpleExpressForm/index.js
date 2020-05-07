import React, { Component } from "react";

class App extends Component {
  state = {
    response: "",
    formData: {
      name: "",
      email: "",
      message: "",
      newsletter: false
    },
    responseToPost: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(prevState => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleSubmit = async event => {
    event.preventDefault();
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
              value={this.state.formData.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>

            <input
              type="text"
              name="email"
              id="email"
              value={this.state.formData.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="message">message</label>

            <input
              type="text"
              name="message"
              id="message"
              value={this.state.formData.message}
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
