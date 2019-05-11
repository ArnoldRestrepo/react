import React from "react";
import "./styles/BadgeList.css";
import Gravatar from './Gravatar';
import {Link} from 'react-router-dom'

class BadgeListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar className="BadgesListItem__avatar" email={this.props.badge.email}/>
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
    if(this.props.badges.lenght === 0){
      return(
        <div>
          <h3>Not Badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">Create New Badge</Link>
        </div>
      )
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                  <BadgeListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgeList;
