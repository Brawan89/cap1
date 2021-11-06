import React from "react";
import Game from "../Game";

const Easy = () => {
  const easyArray = [
    { name: "Dalmatian", image: "./img/Dalmatian.jpg", matched: false, flipped: false },
    { name: "Mickey", image: "./img/Mickey.jpg", matched: false, flipped: false },
    { name: "Winnie", image: "./img/Winnie.jpg", matched: false, flipped: false },
  ];

  return (
    <div className="gameWrapper">
      <Game cards={easyArray} gridName={'easyGrid'} level={'easy'} time={10}/>
    </div>
  );
};

export default Easy;
