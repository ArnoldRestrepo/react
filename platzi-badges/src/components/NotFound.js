import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <article className="container pt-4">
        <h1>Error 404 - La Página No Existe</h1>
        <br />
        <Link to="/badges/" className="btn btn-primary">
          Return to New Badge
        </Link>
      </article>
    );
  }
}

export default NotFound;
