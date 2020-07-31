import React, { Component } from "react";
import actions from "../../services/index";
import Burger from "../Burger/Burger";
import SignUp from "../auth/SignUp";
import LogIn from "../auth/LogIn";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Home extends Component {
  state = {
    axis: "horizontal",
    currentSlide: 0,
  };
  async componentDidMount() {
    //actions.test()
  }
  updateCurrentSlide = (index) => {
    console.log(this, index);
    const { currentSlide } = this.state;
    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };
  next = (dir) => {
    console.log(dir)
    this.setState(
      {
        axis: dir,
      },
      () => this.slide(1)
    );
  };
  prev = (dir) => {
    console.log(dir)
    this.setState(
      {
        axis: dir,
      },
      () => this.slide(-1)
    );
  };

  slide = (i) => {
    this.forceUpdate()
    document.querySelectorAll(".slider-wrapper")[0].style.height = window.height

   console.log( document.querySelectorAll(".slider-wrapper")[0].style.height )
    this.setState((state) => ({
      currentSlide: state.currentSlide + i,
    }));
  };
  render() {
    return (
      <div style={{ height: "80vh" }}>
        <Burger />

        <Carousel
          axis={this.state.axis}
          onChange={this.updateCurrentSlide}
          selectedItem={this.state.currentSlide}
          {...this.props}
        >
          <div style={{ height: "100vh", background: "green" }}>
            <SignUp {...this.props} />
            <p className="signup">Legend 1</p>

            <button classname="btn" onClick={() => this.next("horizontal")}>
              Right
            </button>
          </div>
          <div style={{ height: "100vh", background: "salmon" }}>
            <LogIn {...this.props} />
            <p className="login">Legend 2</p>
            <button classname="btn" onClick={() => this.prev("horizontal")}>
              Left
            </button>

            <button classname="btn" onClick={() => this.next("vertical")}>
              Down
            </button>
          </div>
          <div style={{ height: "100vh", background: "purple" }}>
             <p>Legend 3 </p>
             <button classname="btn" onClick={() => this.prev("vertical")}>
              Up
            </button>
            <button classname="btn" onClick={() => this.next("horizontal")}>
              Right
            </button>
          
          </div>
          <div style={{ height: "100vh", background: "yellow" }}>
          <p>Legend 4</p>
          <button classname="btn" onClick={() => this.prev("horizontal")}>
              Left
            </button>
          </div>
          {/* <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div> */}
        </Carousel>
      </div>
    );
  }
}

export default Home;
