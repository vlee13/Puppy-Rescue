import React, { Component } from "react";
import { Link } from "react-router-dom";
import actions from "../../../services/index.js";
import { Client } from "@petfinder/petfinder-js";
import "../../CSS/Adopted.css";
import GoogleAuthLogin from "../../auth/GoogleAuthLogin";
import NavBar from "./NavBar";
import "../../CSS/NavigationBar.css";

const client = new Client({
  apiKey: "23pouIgSc9wnfPif1QGkqRi7OU1OmwWwWLwiUXzmpeztRBPJKA",
  secret: "kxra4gyDNa0nq9zxra4Bc6nIH5DjZTDGABfYcEVH",
});

class Adopted extends Component {
  state = {
    testimonialBox: false,
    adopted: [],
    petfinderSearch: [],
    searchParams: { type: "dog" },
  };

  // displayNavBar = () => {
  //   return (
  //     <div className="Navbar">
  //       <div className="NavbarContainer">
  //         <Link to="/" className="link">
  //           <div className="NavBarElement">
  //             <img id="LogoMark" />
  //             {/* This span is just a placeholder. It would be remove after finishing horizontal logo */}
  //             <span className="NavBarElementText">House of Paws</span>
  //             {/* Remove till here */}
  //           </div>
  //         </Link>
  //         <div className="NavBarElement">
  //           <Link to="/about" className="link">
  //             <div className="NavBarElementText">About us</div>
  //           </Link>
  //           <Link to="/fosterdog" className="link">
  //             <div className="NavBarElementText">Foster dogs</div>
  //           </Link>

  //           <Link to="/vote" className="link">
  //             <div className="NavBarElementText">Vote!</div>
  //           </Link>

  //           <Link to="/adopted" className="link">
  //             <div className="NavBarElementText">Adopted</div>
  //           </Link>

  //           <Link to="/contactus" className="link">
  //             <div className="NavBarElementText">Contact us</div>
  //           </Link>
  //           <Link to="/contactus" className="link">
  //             <div className="NavBarElementText">|</div>
  //           </Link>
  //           {!this.props.email && (
  //             <GoogleAuthLogin
  //               className="navBarButton"
  //               setUser={this.props.setUser}
  //             />
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

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
    let res2 = await client.animal.search({ type: "dog" });

    this.setState({
      adopted: res.data.adopted,
      petfinderSearch: res2.data.animals,
    });
    console.log(res2);
  }

  showPetfinderSearch = () => {
    console.log("petfinder line 103");
    return this.state.petfinderSearch.map((dog) => {
      return <li>{dog.name}</li>;
    });
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
    console.log("submit line 151");
    event.preventDefault();

    let res3 = await client.animal.search(this.state.searchParams);
    this.setState({
      petfinderSearch: res3.data.animals,
    });
    console.log(res3);
  };

  
  render() {
    return (
      <div>
        <NavBar></NavBar>
        {/* {this.displayNavBar()} */}
        {this.displayHeader()}
        {this.displayAdopted()}
        {this.showPetfinderSearch()}
        {/* {this.displayAddTestimonial()} */}
        {/* {this.state.testimonialBox ? this.displayTestimonialBox() : ""} */}

        <form onSubmit={this.handleSubmit}>
          <label for="location">Location</label>
          <input onChange={this.handleChange} name="location" type="text" />
          <br />
          <label for="distance">Distance</label>
          <input onChange={this.handleChange} name="distance" type="number" />
          <br />
          <label for="size">Size</label>
          <input onChange={this.handleChange} name="size" type="text" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Adopted;
