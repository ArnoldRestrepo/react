import React from "react";
import "./styles/Badge.css";
import confLogo from "../img/badge-header.svg";

class Badge extends React.Component {
  render() {
    const { firstName, lastName, avatarURL, jobTitle, twitter } = this.props;
    return (
      <section className="badge">
        <header className="badge_header">
          <img src={confLogo} alt="Logo" />
        </header>
        <article className="badge_section-name">
          <img className="badge_avatar" src={avatarURL} alt="Avatar" />
          <h1>
            {firstName}
            <br />
            {lastName}
          </h1>
        </article>
        <article className="badge_section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </article>
        <footer className="badge_footer">
          <p>#platziconf</p>
        </footer>
      </section>
    );
  }
}

export default Badge;
