import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NotFound = () => {
  return (
    <>
      <div className="notFoundWrapper">
        <div className="notFoundTitle">
          <h1>404</h1>
          <h1>PAGE NOT FOUND</h1>
        </div>
        <div className="notFoundButtons">
          <button>
            <Link to="/" className="notFoundButton">
              BACK TO MENU
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
