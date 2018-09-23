import React from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

export default class Registration extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    let registerInput = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    };
    console.log(registerInput);
    axios.post("/submit-registration", registerInput).then(res => {
      console.log("loggedIn response obj (based on cookie): ", res.data);
      if (res.data.loggedIn) {
        location.replace("/");
      } else if (res.data.weakPassword) {
        this.setState({ error: false, weakPassword: true });
      } else {
        this.setState({ error: true, weakPassword: false });
      }
    });
  }

  handleChange(e) {
    this[e.target.name] = e.target.value; //assigns target.value properties to the component
  }

  render() {
    return (
      <div className="registrationContainer">
        <h3>Register Now!</h3>
        {this.state.error && (
          <p className="errorMessage">Please fill out all input fields!</p>
        )}
        {this.state.weakPassword && (
          <p className="errorMessage">
            Your password is weak! Please take at least one big letter and 8
            letters.
          </p>
        )}
        <form>
          <div className="input_holder">
            <p>First Name</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="firstname"
              placeholder="Your first name"
            />
          </div>
          <div className="input_holder">
            <p>Last Name</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="lastname"
              placeholder="Your last name"
            />
          </div>
          <div className="input_holder">
            <p>E-mail Address</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="email"
              placeholder="your_email@example.com"
            />
          </div>
          <div className="input_holder">
            <p>Password</p>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Insert a password"
            />
            <p className="terms passWarning" />
          </div>
          <button onClick={this.submit}>submit</button>
          {this.state.error && <div className="error">Please try again!</div>}
          <div className="login">
            Click <Link to="/login">here</Link> to Log in!
            <p className="terms">
              By clicking on "Register", you agree to our terms and conditions.
            </p>
          </div>
        </form>
      </div>
    );
  }
}
