import React, { Component } from "react";
import Textfield from "../Textfield/Textfield";
import Button from "../Button/Button";
import {
  firebase,
  // firestore
} from "./../../firebase";
import "./SignUp.css";

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      phoneNumber: null,
      gender: null,
      password: null,
      confirmPassword: null,
      errors: {
        fullName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value, password } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid";
        break;

      case "phoneNumber":
        errors.phoneNumber =
          value.length < 10 ? "phoneNumber must be 10 characters long!" : "";
        break;
      case "gender":
        errors.gender =
          value.length < 1 ? "phoneNumber must be 2 characters long!" : "";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value !== password ? "Password is not same" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { fullName, phoneNumber, gender, email } = this.state;
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
      await firebase.firestore().collection("users").doc(res.user.uid).set({
        uid: res.user.uid,
        fullName,
        phoneNumber,
        gender,
        email,
      });
      this.props.history.push("/SignIn");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <h2>Sign Up</h2>

          <form onSubmit={this.handleSubmit} noValidate>
            <Textfield errors={this.state.errors} changed={this.handleChange} />
            <Button onClick={this.signup} text="Sign Up" />
          </form>
        </div>
      </>
    );
  }
}

export default Form;
