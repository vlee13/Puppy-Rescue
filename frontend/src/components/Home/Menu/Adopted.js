import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import actions from "../../../services/index.js";
import { Client } from "@petfinder/petfinder-js";
import "../../CSS/Adopted.css";

const client = new Client({
  apiKey: "23pouIgSc9wnfPif1QGkqRi7OU1OmwWwWLwiUXzmpeztRBPJKA",
  secret: "kxra4gyDNa0nq9zxra4Bc6nIH5DjZTDGABfYcEVH",
});

class Adopted extends Component {
  state = {
    testimonialBox: false,
    adopted: [],
    petfinder: [],
    searchParams: { type: "dog" },
  };

  displayNavBar = () => {
    return (
      <div className="Navbar">
        <div className="NavbarContainer">
          <Link to="/" className="link">
            <div className="NavBarElement">
              <img id="LogoMark" />
              {/* This span is just a placeholder. It would be remove after finishing horizontal logo */}
              <span className="NavBarElementText">House of Paws</span>
              {/* Remove till here */}
            </div>
          </Link>
          <div className="NavBarElement">
            <Link to="/about" className="link">
              <div className="NavBarElementText">About us</div>
            </Link>
            <Link to="/fosterdog" className="link">
              <div className="NavBarElementText">Foster dogs</div>
            </Link>

            <Link to="/vote" className="link">
              <div className="NavBarElementText">Vote!</div>
            </Link>

            <Link to="/adopted" className="link">
              <div className="NavBarElementText">Adopted</div>
            </Link>

            <Link to="/contactus" className="link">
              <div className="NavBarElementText">Contact us</div>
            </Link>
            <Link to="/contactus" className="link">
              <div className="NavBarElementText">|</div>
            </Link>
            <button
              className="navBarButton"
              onClick={(event) => {
                event.preventDefault();
                this.setState({
                  showLogIn: true,
                  showPage: false,
                  showNavbar: false,
                });
              }}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  };

  displayHeader = () => {
    return (
      <div className="container">
        <img className="adoptedHeroImage" />
        <div className="textForHeroImage">
          <h1>Our Adoptees!</h1>
          <p>
            These are the success stories and history of all the rescues that
            found their fur-ever homes. <br />
            Share a little testimonial and some pictures for this album!
          </p>
        </div>
      </div>
    );
  };

  async componentDidMount() {
    let res = await actions.adoptedDogs();
    // let res2 = await axios.get(
    //   `https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/types/dog`
    // );
    let res3 = await client.animal.search({ type: "dog" });

    this.setState({
      adopted: res.data.adopted,
      petfinder: res3.data,
    });
    console.log(res3);
  }

  showSearch = async () => {
    let res3 = await client.animal.search(this.state.searchParams);
    this.setState({
      petfinder: res3.data,
    });
    console.log(res3);
  };

  displayAdopted = () => {
    console.log("display dogs", this.state.adopted);
    return this.state.adopted
      .filter((eachDog) => eachDog.status === "adopted")
      .map((eachDog) => {
        return (
          <div key={`dog-key-${eachDog.name}`}>
            <img src={eachDog.image} alt="adoptionpic" />
            <br />
            <h1>{eachDog.name}</h1>
            <br />
            <p>{eachDog.descr}</p>
          </div>
        );
      });
  };

  displayAddTestimonial = () => {
    return (
      <div>
        <h4>Please share a little testimonial and some pictures with us!</h4>
        <button
          onClick={() => {
            this.setState({ testimonialBox: true });
          }}
        >
          Add
        </button>
      </div>
    );
  };

  handleChange = (event) => {
    let searchCopy = { ...this.state.searchParams };
    searchCopy[event.target.name] = event.target.value;
    this.setState({
      searchParams: searchCopy,
    });
    console.log(this.state);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // let res = await axios.post("http://localhost:5000/", this.state);
    // console.log(res);
    this.showSearch();
  };

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   let res = await axios.post("http://localhost:5000/", this.state);
  //   console.log(res);
  // };

  // displayTestimonialBox = () => {
  //   return (
  //     <div>
  //       <form>
  //       <textarea
  //           onChange={this.handleChange}
  //           name="message"
  //           value={this.state.value}
  //           className="textarea"
  //           rows="5"
  //         ></textarea>
  //       </form>
  //     </div>
  //   );
  // };

  render() {
    return (
      <div>
        {this.displayNavBar()}
        {this.displayHeader()}
        {this.displayAdopted()}
        {/* {this.displayAddTestimonial()} */}
        {/* {this.state.testimonialBox ? this.displayTestimonialBox() : ""} */}

        <form onSubmit={this.handleSubmit}>
          <label for="location">Location</label>
          <input onChange={this.handleChange} name="location" type="number" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Adopted;
