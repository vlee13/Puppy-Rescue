import React, { Component } from 'react';
import actions from '../../services/index'
import Burger from '../Burger/Burger'


class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <div>
        <Burger/>
      </div>
    );
  }
}

export default Home;
