import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import header from "../img/platziconf-logo.svg";
import api from "../api";

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        {/* Hero */}
        <section className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </section>
        {/* Badge */}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                email={this.state.form.email}
                avatarURL="https://www.gravatar.com/avatar?d=identicon"
                jobTitle={this.state.form.jobTitle || "Job Title"}
                twitter={this.state.form.twitter || "Twitter Nickname"}
              />
            </div>
            <div className="col-md-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
