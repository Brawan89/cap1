import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cards from "../Cards";
import "./style.css";

const Game = ({ cards, gridName, level, time }) => {
  const [cardsArray, setCardsArray] = useState(cards);
  const [openCards, setOpenCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [seconds, setSeconds] = useState(time);
  const [disableClick, setdisableClick] = useState(false);
  const gridClass = gridName;
  const levelName = level;
  const history = useHistory();

  // Double and shuffle the original array
  useEffect(() => {
    const newArray = cardsArray
      .concat(cardsArray)
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCardsArray(newArray);
  }, []);

  // Timer
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      const status = "YOU LOST";
      history.push(`/finishmenu/${status}/${turns}`);
    }
  });

  // Check for when 2 cards clicked to start the game logic
  useEffect(() => {
    if (openCards.length === 2) {
      setdisableClick(true);
      game();
    }
  }, [openCards]);

  // Check if the player won the game
  useEffect(() => {
    if (cardsArray.every((card) => card.matched)) {
      const status = "YOU WON";
      history.push(`/finishmenu/${status}/${turns}`);
    }
  }, [cardsArray]);

  // Handel the player clicks and flip the cards
  const clickHandel = (card) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, card.id]);
      setCardFlipped(card.id);
    } else {
      setOpenCards([card.id]);
      setCardFlipped(card.id);
    }
  };

  // Flip the card
  const setCardFlipped = (index) => {
    let newCardsArray = [...cardsArray];
    newCardsArray[index].flipped = true;
    setCardsArray(newCardsArray);
  };

  // Set the cards unflipped
  const setCardUnFlipped = (indexOne, indexTwo) => {
    let newCardsArray = [...cardsArray];
    newCardsArray[indexOne].flipped = false;
    newCardsArray[indexTwo].flipped = false;
    setCardsArray(newCardsArray);
  };

  // When cards matched set them to matched
  const setCardMatched = (indexOne, indexTwo) => {
    setTimeout(() => {
      let newCardsArray = [...cardsArray];
      newCardsArray[indexOne].matched = true;
      newCardsArray[indexTwo].matched = true;
      setCardsArray(newCardsArray);
    }, 1000);
  };

  // Reset the turn to start new one
  const resetTurns = () => {
    setOpenCards([]);
    setdisableClick(false);
  };

  // Game logic
  const game = () => {
    const [cardOne, cardTwo] = openCards;
    if (cardsArray[cardOne].name === cardsArray[cardTwo].name) {
      setCardMatched(cardOne, cardTwo);
      setTurns((turn) => turn + 1);
      resetTurns();
    } else {
      setTurns((turn) => turn + 1);
      setTimeout(() => {
        resetTurns();
        setCardUnFlipped(cardOne, cardTwo);
      }, 1000);
    }
  };

  return (
    <>
      <div className="timerCounter">
        <div className="timerTitle">
          <h2>Time Left</h2>
        </div>
        <div className="timerTime">
          <h1>{seconds}</h1>
        </div>
      </div>
      <div className={gridClass}>
        {cardsArray.map((card, index) => {
          return (
            <Cards
              card={card}
              clickHandel={clickHandel}
              index={index}
              disableClick={disableClick}
              level={levelName}
              key={index}
            />
          );
        })}
      </div>
      <div className="turnsCounter">
        <div className="turnsTitle">
          <h2>Turns</h2>
        </div>
        <div className="turnsCount">
          <h1>{turns}</h1>
        </div>
      </div>
    </>
  );
};

export default Game;
