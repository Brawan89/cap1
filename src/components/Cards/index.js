import React from "react";
import "./style.css";

const Cards = ({ card, clickHandel }) => {
  let classCard;
  if (card.matched) {
    classCard = "flip-card-inner disabled";
  } else if (card.flipped) {
    classCard = "flip-card-inner flipped";
  } else {
    classCard = "flip-card-inner";
  }

  const cardHandel = () => {
    clickHandel(card);
  };

  return (
    <div className="flip-card">
      <div className={classCard}>
        <div className="flip-card-front">
          <img
            onClick={cardHandel}
            src="./img/cover.jpeg"
          ></img>
        </div>
        <div className="flip-card-back flipped">
          <img src={card.image}></img>
        </div>
      </div>
    </div>
  );
};

export default Cards;
