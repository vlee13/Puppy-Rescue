import React, { Component } from "react";
import actions from "../../../services/index.js";
import { Client } from "@petfinder/petfinder-js";
import "../../CSS/Adopted.css";
//import Slider from "react-slick";
// import "../../CSS/PetfinderSlides.css";

const client = new Client({
  apiKey: "23pouIgSc9wnfPif1QGkqRi7OU1OmwWwWLwiUXzmpeztRBPJKA",
  secret: "kxra4gyDNa0nq9zxra4Bc6nIH5DjZTDGABfYcEVH",
});

// const settings = {
//   dots: false,
//   infinte: true,
//   speed: 10,
//   arrows: true,
//   slidesToScroll: 5,
//   slidesToShow: 5,
//   className: "slides",
// responsive: [
//   {
//     breakpoint: 420,
//     settings: {
//       dots: false,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//     },
//   },
// ],
// };

class Adopted extends Component {
  state = {
    testimonialBox: false,
    adopted: [],
    petfinderSearch: [],
    searchParams: { type: "dog" },
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
    let res2 = await client.animal.search({ type: "dog" });

    this.setState({
      adopted: res.data.adopted,
      petfinderSearch: res2.data.animals,
    });
    console.log(res2);
  }

  showPetfinderSearch = () => {
    console.log("petfinder line 103");
    return this.state.petfinderSearch.map((eachdog) => {
      return (
        <div>
          <div className="searchImage">
            <img
              src={
                eachdog.photos[0]?.medium ||
                "https://azadchaiwala.pk/getImage?i=&t=course"
              }
              alt="Img"
            />
          </div>
          <br />
          <div className="searchDescription">
            {eachdog.name}
            <br />
            {eachdog.gender}
            <br />
            {eachdog.age}
            <br />
          </div>
          {/* <br />
          {eachdog.contact.address}
          <br />
          {eachdog.contact.phone} */}
        </div>
      );
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

  displayForm = () => {
    return (
      <div>
        <div>
          <h1>Want to know about adoptable dogs near you?</h1>
          <h2>
            Enter your zipcode or city and any other desired specifications.
          </h2>
        </div>

        <div className="petfinder">
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
            <p>Please select your gender:</p>
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
            <br />
            <input type="radio" id="female" name="gender" value="female" />
            <label for="female">Female</label>
            <br />

            <label for="weight">Weight</label>
            <input onChange={this.handleChange} name="weight" type="text" />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.displayHeader()}
        <div className="alumni">{this.displayAdopted()}</div>
        <hr></hr>
        <div>
          <div className="petfinderText">
            <h1>Want to know about adoptable dogs near you?</h1>
            <h2>
              Enter your zipcode or city and any other desired specifications.
            </h2>
          </div>

          <div className="petfinderForm">
            <form onSubmit={this.handleSubmit}>
              <label for="location">Location</label>
              <input onChange={this.handleChange} name="location" type="text" />
              <br />
              <label for="distance">Distance</label>
              <input
                onChange={this.handleChange}
                name="distance"
                type="number"
              />
              <br />
              <label for="size">Size</label>
              <input onChange={this.handleChange} name="size" type="text" />
              <br />
              <p>Please select your gender:</p>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
              <br />
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
              <br />

              <label for="weight">Weight</label>
              <input onChange={this.handleChange} name="weight" type="text" />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="displayPetfinder">{this.showPetfinderSearch()}</div>
        </div>

        {/* <Slider {...settings}>{this.showPetfinderSearch()}</Slider> */}
      </div>
    );
  }
}
export default Adopted;
