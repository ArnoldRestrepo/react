import React from "react";
import "./styles/BadgeList.css";

class BadgeListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />
        <div>
          <strong>
            {this.props.badge.firstName} <br /> {this.props.badge.lastName}{" "}
            <br /> @{this.props.badge.twitter} <br />{" "}
            {this.props.badge.jobTitle}
          </strong>
        </div>
      </div>
    );
  }
}

class BadgeList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgeListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgeList;
