import React, { Component } from "react";
import actions from "../../services/index";

class EditDog extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked", this.state);
    actions
      .editDog(this.state)
      .then((edited) => {
        console.log(edited);
      })
      .catch((err) => console.log(err));
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
            name="descr"
            placeholder="Description"
            type="text"
            onChange={this.handleChange}
          />
          <input
            name="status"
            placeholder="Status"
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditDog;
