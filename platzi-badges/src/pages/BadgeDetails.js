import React from "react";
import confLogo from "../img/platziconf-logo.svg";
import Badge from "../components/Badge";
import "./styles/BadgeDetails.css";
import { Link } from "react-router-dom";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function BadgeDetails(props) {
  const badge = props.badge;
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
              <button
                onClick={props.onOpenModal}
                className="btn btn-outline-danger"
              >
                Delete Badge
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              >
                <h1>Hello</h1>
              </DeleteBadgeModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
