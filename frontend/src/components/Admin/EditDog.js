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
    actions.editDog(this.state).then((edited) => {
      console.log(edited);
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
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditDog;
