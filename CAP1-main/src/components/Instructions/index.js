import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Instructions = () => {
  return (
    <>
      <div className="instructionsWrapper">
        <div className="instructions">
          <div className="instructionsTitle">
            <h1>Instructions</h1>
          </div>
          <div className="instructionsDesc">
            <p>
              The game of memory involves selecting two squares from a group of
              squares in attempt to find a match. These are a few details we can
              plan out now before setting up the game.
            </p>
            <ul>
              <li>Game has an even number (n) of squares</li>
              <li>Different color for every 2 squares (n / 2 options)</li>
              <li>Each turn the user gets 2 choices (unlimited turns)</li>
              <li>
                There is severl levels of the game easy,intermediate and hard
              </li>
              <li>Cards only stay flipped over when 2 match</li>
              <li>
                Game ends when all matches occur or time finish. (n / 2) matches
              </li>
            </ul>
          </div>
          <div className="instructionsButtons">
            <button>
              <Link to="/" className="instructionsButton">Back To Menu</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
