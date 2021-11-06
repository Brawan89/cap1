import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Levels = () => {
  return (
    <>
      <div className="levelsWrapper">
        <div className="levelsTitle">
          <h2>CHOSE YOUR LEVEL</h2>
        </div>
        <div className="levelsButtons">
          <button>
            <Link to="/easy" className="levelsButton">
              Easy
            </Link>
          </button>
          <button>
            <Link to="/normal" className="levelsButton">
              Normal
            </Link>
          </button>
          <button>
            <Link to="/hard" className="levelsButton">
              Hard
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Levels;
