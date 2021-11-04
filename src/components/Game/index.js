import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import "./style.css";

const Game = ({ cards }) => {
  const [cardsArray, setCardsArray] = useState(cards);
  const [openCards, setOpenCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const newArray = cardsArray
      .concat(cardsArray)
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCardsArray(newArray);
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("BOOOOM!");
    }
  });

  useEffect(() => {
    if (openCards.length === 2) {
      game();
    }
  }, [openCards]);

  const clickHandel = (card) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, card.id]);
      console.log("card two should be flipped");
      console.log(cardsArray[card.id]);
    } else {
      setOpenCards([card.id]);
      console.log("card one should be flipped");
      console.log(cardsArray[card.id]);
    }
  };

  const completed = () => {
    if (cardsArray.every((card) => card.matched)) {
      console.log("win");
    }
  };

  const game = () => {
    const [cardOne, cardTwo] = openCards;
    if (cardsArray[cardOne].name === cardsArray[cardTwo].name) {
      console.log("match");
      cardsArray[cardOne].matched = true;
      cardsArray[cardTwo].matched = true;
      setTurns((turn) => turn + 1);
      setOpenCards([]);
      completed();
    } else {
      console.log("not a match");
      setTurns((turn) => turn + 1);
      setTimeout(() => {
        setOpenCards([]);
      }, 2000);
    }
  };

  return (
    <>
      <h1>{seconds}</h1>
      <h1>{turns}</h1>
      {cardsArray.map((card, index) => {
        return (
          <Cards
            card={card}
            clickHandel={clickHandel}
            index={index}
            key={index}
          />
        );
      })}
    </>
  );
};

export default Game;
