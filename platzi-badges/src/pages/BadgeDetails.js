import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import confLogo from "../img/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import Badge from "../components/Badge";
import api from "../api";

class BadgeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    const badge = this.state.data;
    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 ">
                <img src={confLogo} alt="Logo de la Conferencia" />
              </div>
              <div className="col-sm-12 col-md-6  BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                twitter={badge.twitter}
                email={badge.email}
                jobTitle={badge.jobTitle}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <h2 className="my-1">Actions</h2>
              <div className="btn-group my-1" role="group" aria-label="Actions">
                <Link className="btn btn-info" to={`/badges/${badge.id}/edit`}>
                  Edit Badge
                </Link>
                <button className="btn btn-outline-danger">Delete Badge</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;
