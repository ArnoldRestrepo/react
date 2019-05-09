import React from "react";
import "./styles/Badge.css";
import confLogo from "../img/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <section className="badge">
        <header className="badge_header">
          <img src={confLogo} alt="Logo" />
        </header>
        <article className="badge_section-name">
          <img
            className="badge_avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            Arnold <br />
            Restrepo
          </h1>
        </article>
        <article className="badge_section-info">
          <h3>Frontend Developer</h3>
          <div>@restrepo_arnold</div>
        </article>
        <footer className="badge_footer">
          <p>#platziconf</p>
        </footer>
      </section>
    );
  }
}

export default Badge;
