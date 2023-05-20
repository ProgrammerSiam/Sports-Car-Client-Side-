import React from "react";
import "./Style/error.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
export default function Error() {
  return (
    <section className="error">
      <div>
        <p>
          <span>Opps! </span> 404 Page not found.
        </p>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" class="button button--flex">
          Back to Home
          <span className="button__icon">
            <FaHome />
          </span>
        </Link>
      </div>
    </section>
  );
}
