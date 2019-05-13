import React from "react";
import LogoConf from "../img/platziconf-logo.svg";
import Astronaut from "../img/astronauts.svg";
import "./styles/HomeBadge.css";
import { Link } from "react-router-dom";

class HomeBadge extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="HomeBadge">
          <div className="container HomeBadge__container">
            <div className="HomeBadge__col">
              <img src={LogoConf} alt="PlatziConfLogo" />
              <h1 className="py-3">
                Badge <br />
                Management <br />
                System
              </h1>
              <Link to="/badges" className="btn btn-primary font-weight-bold">
                Start
              </Link>
            </div>
            <div className="HomeBadge__col">
              <img src={Astronaut} alt="PlatziConfLogo" />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default HomeBadge;
