import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav className="Navbar">
          <div className="container-fluid">
            <Link to="/" className="Navbar__brand">
              <img className="Navbar__brand-logo" src={logo} alt="Logo" />
              <span className="font-weight-light">Platzi</span>
              <span className="font-weight-bold">Conf</span>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
