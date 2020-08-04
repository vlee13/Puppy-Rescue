import React, { Component } from "react";
import AddDog from "./AddDog";
import EditDog from "./EditDog";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <AddDog />
        <br />
        <EditDog />
      </div>
    );
  }
}

export default AdminPage;
