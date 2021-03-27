import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/About.css";
import "../../CSS/NavigationBar.css";
import NavBar from "../Menu/NavBar";
import Footer from "../Menu/Footer";

class About extends Component {
  displayPage = () => {
    return (
      <div>
        {/* Header */}

        <div className="container">
          <img className="background1" />
          <div className="textForHeroImage">
            <h1>
              Everyone loves dogs. Not everyone can foster or adopt. We are here
              to help.
            </h1>
            <p>
              We foster the most abandoned dogs from our local shelter to show
              potential adopters how amazing these angel babies are.
            </p>
          </div>
        </div>

        {/* Our Story  */}

        <div>
          <div className="container">
            <img className="background2" />
            <div className="textForBG">
              <h1 className="header">Our history</h1>
              <p className="text">
                In the U.S. alone, about 3.3 million canines enter the shelters
                every YEAR. A lot of these shelters simply don't have the space
                to hold all the animals and as a result, dogs live in cramped
                cages every single day, and about 670,000 dogs are euthanized.
                <br />
                We know these facts can be daunting and it can make you question
                where to even start. That's exactly why House of Paws was
                initiated so EVERYONE can easily and actively participate in
                saving these canines, one angel baby at a time.
              </p>
            </div>
          </div>
        </div>

        {/* What we do */}

        <div>
          <div className="container">
            <img className="background3" />
            <div className="textForBG2">
              <h1 className="header">What we do</h1>
              <p className="text">
                Not everyone who has the heart for animal welfare has the means
                to foster or adopt. Our team at House of Paws has come up with a
                creative & easy-to-use platform where you can partner with us,
                and see that every shelter dog has a chance to find a safe &
                loving home.
                <br />
                We hand pick 10 most "unwanted" shelter dogs. You as a member
                can{" "}
                <Link to="/vote">
                  <span>vote</span>
                </Link>{" "}
                up to 3 times to choose which dog gets to be rescued from the
                shelter! Every 1st of the month, the shelter dog with the
                highest votes is selected to go home to a foster and a warm bed.
                . Check out our House of Paws Alumni{" "}
                <Link to="/adopted">
                  <span>here.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* What to expect from donations */}

        <div className="container">
          <img className="background4" />
          <div className="textForBG">
            <h1 className="header">What to expect from donations</h1>
            <p className="text">
              Donations will go directly towards the care and wellbeing of the
              foster dogs including: doctor's bills, any medications needed, any
              grooming needed, food, treats, toys, collar, leash, food/water
              bowl, a bed, etc.
              <br />
              Sign up and you will get all updates and details of our foster
              dogs in a monthly membership newsletter. Any more questions?{" "}
              <Link to="/fosterdog">
                <button>Contact us.</button>
              </Link>{" "}
            </p>
          </div>
        </div>

        {/* Help other organizations */}

        <div className="container">
          <img className="background5" />
          <div className="whiteBGleft">
            <h1 className="header">Help other organizations</h1>
            <p className="text">
              We would like to highlight some of our favorites! Please take a
              look and consider helping out.
            </p>
            {/* <h5 className="underline">Hope for Paws</h5> */}
            {/* <p>
              They bring animals who are suffering–often from abuse, neglect, or
              injuries–off the streets and provide medical care.
            </p> */}
            {/* <br /> */}
            <p>
              <a href="https://www.hopeforpaws.org">Hope for Paws</a>
            </p>
            <br />
            {/* <h5>A Purposeful Rescue</h5> */}
            {/* <p>
              They save overlooked dogs from high-kill shelters in the Los
              Angeles area.
            </p> */}
            <p>
              <a href="https://www.hopeforpaws.org">A Purposeful Rescue</a>
            </p>
            <br />
            {/* <h5>American Pit Bull Foundation</h5> */}
            {/* <p>
              Their work is in educating, changing the perception of, and saving
              Pit Bull breeds.
            </p> */}
            <p>
              <a href="https://www.hopeforpaws.org">
                American Pit Bull Foundation
              </a>
            </p>
            <br />
            {/* <h5>Best friends animal society</h5> */}
            {/* <p>
              Best Friends Animal Society is a group dedicated to bringing an
              end to the killing of shelter animals.
            </p> */}
            <p>
              <a href="https://www.hopeforpaws.org">
                Best Friends Animal Society
              </a>
            </p>
            <br />
            {/* <h5>Muttville Senior Dog Rescue</h5> */}
            {/* <p>
              They are dedicated to finding homes or hospice care for senior
              dogs in need. Their success stories are truly heartwarming.
            </p> */}
            <p>
              <a href="https://www.hopeforpaws.org">
                Muttville Senior Dog Rescue
              </a>
            </p>
            <br />
          </div>
        </div>

        {/* Zoey Game Section */}

        <div className="container">
          <img className="backgroundForGame" />
          <div className="whiteBGright">
            <h1>Bonus Track: Help Zooey survive in space</h1>
            <p>
              We are dev! One of our first projects at Ironhack was a game
              developed in Canvas. TAKE ZOOEY THROUGH SPACE, KILL ALIENS, AND
              COLLECT COINS. AS THE GAME PROGRESSES, IT WILL GET HARDER TO
              SURVIVE. KEEP ZOOEY ALIVE FOR AS LONG AS POSSIBLE GET THE HIGHEST
              SCORE TO WIN, and GAME OVER WHEN ALIENS REACH YOU.
            </p>
            <div className="game">
              <button>
                <a href="https://vlee13.github.io/SPACE-ZOOEY/">Play!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <NavBar
          setUser={this.props.setUser}
          user={this.props.user}
          logOut={this.props.logOut}
        ></NavBar>
        {this.displayPage()}
        <Footer
          setUser={this.props.setUser}
          user={this.props.user}
          logOut={this.props.logOut}
        ></Footer>
      </div>
    );
  }
}
export default About;
