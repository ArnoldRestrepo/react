import React from "react";
import Navbar from "../components/Navbar.js";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import header from "../img/badge-header.svg";

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "Name",
      lastName: "Last Name",
      email: "Email",
      jobTitle: "Designer",
      twitter: "@name"
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

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
            <div className="col-md-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                avatarURL="https://www.gravatar.com/avatar?d=identicon"
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-md-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
