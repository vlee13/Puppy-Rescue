import React, { Component } from "react";
import actions from "../../services/index";

class AddDog extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    actions.addDog(this.state).then((newdog) => {
      console.log(newdog);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="Name" onChange={this.handleChange} />
          <input
            name="shelterID"
            placeholder="ShelterID#"
            onChange={this.handleChange}
          />
          <input
            name="age"
            placeholder="Age"
            type="number"
            onChange={this.handleChange}
          />
          <input
            name="weight"
            placeholder="Weight"
            type="number"
            onChange={this.handleChange}
          />
          <input
            name="location"
            placeholder="Location"
            onChange={this.handleChange}
          />
          <input name="image" placeholder="Image" type="file" />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default AddDog;
