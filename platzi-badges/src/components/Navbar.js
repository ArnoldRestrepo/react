import React from "react";
import logo from "../img/logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <div className="container-fluid">
          <a href="/" className="Navbar__brand">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
