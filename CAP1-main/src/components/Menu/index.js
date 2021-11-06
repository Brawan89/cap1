import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Menu = () => {
  return (
    <div className="menuWrapper">
      <div className="menuTitle">
        <h1>Flip Card</h1>
        <img src="./img/logo.png" alt="disney logo" />
      </div>
      <div className="menuButtons">
        <button>
          <Link to="/levels" className="menuButton">
            START
          </Link>
        </button>
        <button>
          <Link to="/instructions" className="menuButton">
            INSTRACTIONS
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Menu;
