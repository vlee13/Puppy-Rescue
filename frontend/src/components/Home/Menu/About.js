import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/About.css";
import "../../CSS/NavigationBar.css";

class About extends Component {
  displayPage = () => {
    return (
      <div>
        {/* Header */}

        <div className="container">
          <img className="background1" />
          <div className="textForHeroImage">
            <h1>
              Not everyone who love dogs can foster or adopt. We are here to
              help.
            </h1>
            <p>
              We foster one of the most abandoned dogs from our local shelter to
              show a potential adopter how awesome this dog is.
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
                Not everyone who has the heart for animal welfare has the means
                to foster or adopt. Our team at House of Paws has come up with a
                creative & easy-to-use platform where you can partner with us,
                and see that every shelter dog has a chance to find a safe &
                loving home.
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
                We hand pick 10 most "unwanted" shelter dogs by selecting the
                oldest or those that have been at the shelter the longest. You
                as a member can{" "}
                <Link to="/vote">
                  <span>vote</span>
                </Link>{" "}
                up to 3 times to choose which dog gets to be rescued from the
                shelter! Every 1st of the month as long as a foster is
                available, the shelter dog with the highest votes is selected to
                go home to a foster and a warm bed. We want people to adopt this
                cuttie dogs. You can check our lovely stories of adopted dogs{" "}
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
              bowl, a bed, etc. All update details will be provided in biweekly
              membership newsletters. Any more questions?{" "}
              <Link to="/fosterdog">
                <button>Contact us.</button>
              </Link>{" "}
            </p>
          </div>
        </div>

        {/* Help other organizations */}

        <div className="container">
          <img className="background6" />
          <div className="whiteBGleft">
            <h1 className="header">Help other organizations</h1>
            <p className="text">
              We believe in giving back to our community. Here you can find a
              list of other organizations that put a lot of effort helping dogs.
              Please take a look of them and help them as well.
            </p>
            <h5 className="underline">Hope for paws</h5>
            <p>
              They bring animals who are suffering–often from abuse, neglect, or
              injuries–off the streets and provide medical care. They also work
              to find forever homes for these animals.
            </p>
            <ul>https://www.hopeforpaws.org</ul>
            <h5>A purposeful rescue</h5>
            <p>
              A Purposeful rescue that saves overlooked dogs from high-kill Los
              Angeles area shelters.
            </p>
            <ul>http://www.apurposefulrescue.or</ul>
            <h5>American pit bull foundation</h5>
            <p>
              The American Pit Bull Foundation works to educate and change the
              perception and stereotypes surrounding Pit Bulls.
            </p>
            <ul>https://apbf.dog</ul>
            <h5>Animal aid unlimited</h5>
            <p>
              Animal Aid Unlimited take animals off the street who need medical
              attention and provide them with the care they need.
            </p>
            <ul>https://www.animalaidunlimited.org</ul>
            <h5>Best friends animal society</h5>
            <p>
              Best Friends Animal Society is a group dedicated to bringing an
              end to the killing of shelter animals.
            </p>
            <ul>https://bestfriends.or</ul>
            <h5>Jameson animal rescue ranch</h5>
            <p>
              Not only do they rescue and find homes for dogs, but they also
              offer assistance to low-income families with animals, people
              displaced by natural disasters, victims of abuse, senior citizens,
              and more.
            </p>
            <ul>https://www.jamesonanimalrescueranch.or</ul>
            <h5>Muttville</h5>
            <p>
              Muttville Senior Dog Rescue is dedicated to finding homes or
              hospice for older dogs in need of help. Their success stories are
              truly heartwarming.
            </p>
            <ul>https://muttville.or</ul>
            <h5>ASPCA</h5>
            <p>
              The American Society regularly assist in rescuing dogs from dog
              fighting rings, puppy mills, hoarding cases, and other neglectful
              or abusive situations.
            </p>
            <ul>https://www.aspca.or</ul>
          </div>
        </div>

        {/* Zoey Game Section */}

        <div className="container">
          <img className="backgroundForGame" />
          <div className="whiteBGright">
            <h1>Bonus Track: Play Zoey in the Space</h1>
            <p>
              We are dev! One of our first projects at Ironhack was a game
              developed in Canvas. TAKE ZOOEY THROUGH SPACE, KILL ALIENS, AND
              COLLECT COINS. AS THE GAME PROGRESSES, IT WILL GET HARDER TO
              SURVIVE. KEEP ZOOEY ALIVE FOR AS LONG AS POSSIBLE GET THE HIGHEST
              SCORE TO WIN, and GAME OVER WHEN ALIENS REACH YOU.
            </p>
            <Link to="/game">
              <button>Play!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.displayPage()}</div>;
  }
}
export default About;
