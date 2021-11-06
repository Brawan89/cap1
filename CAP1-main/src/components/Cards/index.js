import React from "react";
import "./style.css";

const Cards = ({ card, clickHandel, disableClick, level }) => {
  let classCard;
  let classImg;

  if (card.matched) {
    classCard = "flip-card-inner flipped";
    classImg = "flip-card-back opicty";
  } else if (card.flipped) {
    classCard = "flip-card-inner flipped";
    classImg = "flip-card-back";
  } else {
    classCard = "flip-card-inner";
    classImg = "flip-card-back";
  }

  const cardHandel = () => {
    clickHandel(card);
  };

  return (
    <div className={disableClick ? `flip-card ${level} disabled` : `flip-card ${level}`}>
      <div className={classCard}>
        <div className="flip-card-front">
          <img onClick={cardHandel} src="./img/Disney.jpg" alt="cover imag"></img>
        </div>
        <div className={classImg}>
          <img src={card.image} alt={`${card.name} img`}></img>
        </div>
      </div>
    </div>
  );
};

export default Cards;
