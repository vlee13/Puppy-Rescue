import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom"
class Burger extends Component {
    render() {
        return (
            <div>
                <Menu right>
           
            <Link className="menu-item" to="/">
              Search
            </Link>
            <a className="menu-item" onClick={this.toggleSearchBar}>
              Home
            </a>
            <Link className="menu-item" to="/About">
              About 
            </Link>
            <Link className="menu-item" to="/Vote">
              Vote 
            </Link>
            <Link className="menu-item" to="/FosterDogs">
              Foster Dogs
            </Link>
          </Menu>
            </div>
        );
    }
}

export default Burger;