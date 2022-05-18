import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    fetch("https://6273b645345e1821b2200dff.mockapi.io/login", {
      method: "POST",
      body: JSON.stringify({ user: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.setToken(data.sessionToken);
      });
    event.preventDefault();
  };

  logout = () => {
    this.setState({
      sessionToken: "",
    });
    localStorage.clear();
  };

  render() {
    return (
      <div className="tableui">
        <h1>Login</h1>

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="li_username"
              type="text"
              name="username"
              placeholder="enter username"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="li_password"
              type="password"
              name="password"
              placeholder="enter password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit"> Submit </Button>
        </Form>
      </div>
    );
  }
}
