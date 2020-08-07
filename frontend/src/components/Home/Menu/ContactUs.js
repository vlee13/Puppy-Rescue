import React, { Component } from "react";
import axios from "axios";
import "../../CSS/ContactUs.css";

class ContactUs extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let res = await axios.post("http://localhost:5000/", this.state);
    console.log(res);
  };

  displayHeader = () => {
    return (
      <div className="container">
        <img className="imageForContactUs" />
        <div className="textForHeroImage">
          <h1 id="contactUsTagline">
            Our love for dogs is always ready to answer any of your questions.
          </h1>
        </div>
      </div>
    );
  };

  displayContactUsPage = () => {
    let audio = new Audio("/bark.mp3");
    return (
      <div>
        <div className="contactUsContainer">
          <div className="contactUsTextContainer">
            <div className="instructions">
              <h4 className="underline">
                Please fill up these details below and submit.
              </h4>
            </div>
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
              <label className="label" htmlFor="name">
                Name
              </label>
              <br />
              <input
                onChange={this.handleChange}
                name="name"
                type="text"
                value={this.state.value}
                className="inputBar"
              />
              <br />
              <label className="label" htmlFor="exampleInputEmail1">
                Email address
              </label>
              <br />
              <input
                onChange={this.handleChange}
                name="email"
                type="email"
                value={this.state.value}
                className="inputBar"
              />
              <br />
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                onChange={this.handleChange}
                name="message"
                value={this.state.value}
                className="textarea"
                rows="5"
              ></textarea>
              <br />
              <div className="buttonContainer">
                <button
                  onClick={() => audio.play()}
                  type="submit"
                  className="submitButton"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.displayHeader()}
        {this.displayContactUsPage()}
      </div>
    );
  }
}

export default ContactUs;
