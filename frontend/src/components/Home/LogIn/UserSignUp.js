import React, { Component } from "react";
import GoogleAuth from "../../auth/GoogleAuth";

class UserSignUp extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              showPage: true,
              showLogIn: false,
              showSignUp: false,
              showNavbar: true,
            });
            console.log("Hi");
          }}
        >
          BACK
        </button>
        <img src="" alt="" ClassName="logoMark" />
        <h1>Be part of our community</h1>
        <label>Name</label>
        <input type="text" id="fname" name="fname" value="" />
        <br />
        <label>Email adress</label>
        <input type="text" id="fname" name="fname" value="" />
        <br />
        <label>Create a password</label>
        <input type="text" id="fname" name="fname" value="" />
        <br />
        <button>SIGN UP</button>
        <GoogleAuth setUser={this.props.setUser} />
        <button
          onClick={() => {
            this.setState({
              showPage: false,
              showLogIn: true,
              showSignUp: false,
              showNavbar: false,
            });
            console.log("Hi");
          }}
        >
          <p>Already have an account?</p>
        </button>
      </div>
    );
  }
}

export default UserSignUp;
