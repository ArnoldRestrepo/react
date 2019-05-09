import React from "react";
import Navbar from "../components/Navbar.js";
import Badge from "../components/Badge.js";
import header from "../img/badge-header.svg";
import "./styles/NewBadge.css";

class NewBadge extends React.Component {
  render() {
    return (
      <div className="Wrapper">
        <header>
          {/* Navbar */}
          <Navbar />
          {/* Hero */}
          <section className="BadgeNew__hero">
            <img src={header} alt="Logo" className="" />
          </section>
        </header>
        {/* Badge */}
        <div className="container">
          <div className="row">
            <div className="col" />
            <Badge
              firstName="Arnold"
              lastName="Restrepo"
              avatarURL="https://www.gravatar.com/avatar?d=identicon"
              jobTitle="Frontend Developer"
              twitter="restrepo_arnold"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewBadge;
