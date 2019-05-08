import React from "react";
import confLogo from "../img/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <section>
        <header>
          <img src={confLogo} alt="Logo" />
        </header>
        <article>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Arnold <br />
            Restrepo
          </h1>
        </article>
        <article>
          <p>Frontend Developer</p>
          <p>@restrepo_arnold</p>
        </article>
        <footer>
          <p>#platziconf</p>
        </footer>
      </section>
    );
  }
}

export default Badge;
