import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./slideTransititions.scss";
import 

class transition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location),
    };
  }

  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) });
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter((n) => n == "");
    return pathArr.length;
  }
  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };

    return (
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          className="pageSlider"
          mountOnEnter={false}
          umountOnExit={true}
        >
          <div
            className={
              this.getPathDepth(location) - this.state.prevDepth >= 0
                ? "left"
                : "right"
            }
          >
            <Switch location={location}>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" exact component={Aboutpage} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(transition);
