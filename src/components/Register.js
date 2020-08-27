/** @format */

import React from "react";
import "../css/register.css";
import { connect } from "react-redux";
import { registerWithEmail, loginWithGoogle } from "../store/authActions";

function Register(props) {
  if (!props.auth.isLoaded) return null;
  if (props.auth.uid) props.history.push("/");
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.registerWithEmail(email, password);
  };
  return (
    <div className="backgroundsxx" id="back">
      <h1 className="header">Register Now</h1>

      <form className="registration_Form" onSubmit={ handleSubmit }>
        <div>
          <input name="email" placeholder="Email" type="email" id="inputsx" />
        </div>
        <div>
          <input
            name="password"
            placeholder="password"
            type="password"
            autoComplete="true"
            id="inputsx"
          />
        </div>
        <button type="submit" id="signInButtonsx">
          Submit
        </button>{" "}
        <br />
        <button
          type="submit"
          onClick={props.loginWithGoogle}
          id="googleButtonsx"
        >
          Register WIth Google
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = {
  registerWithEmail,
  loginWithGoogle,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
