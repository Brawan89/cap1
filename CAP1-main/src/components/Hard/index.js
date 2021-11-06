import React from "react";
import Game from "../Game";

const Hard = () => {
  const hardArray = [
    { name: "Dalmatian", image: "./img/Dalmatian.jpg", matched: false, flipped: false },
    { name: "Mickey", image: "./img/Mickey.jpg", matched: false, flipped: false },
    { name: "Winnie", image: "./img/Winnie.jpg", matched: false, flipped: false },
    { name: "Goofy", image: "./img/Goofy.jpg", matched: false, flipped: false },
    { name: "Alice", image: "./img/Alice.jpg", matched: false, flipped: false },
    { name: "Stitch", image: "./img/Stitch.jpg", matched: false, flipped: false },
    { name: "Lightning", image: "./img/Lightning.jpg", matched: false, flipped: false },
    { name: "Minnie", image: "./img/Minnie.jpg", matched: false, flipped: false },
    { name: "Peter Pan", image: "./img/Peter Pan.jpg", matched: false, flipped: false },
    { name: "Woody", image: "./img/Woody.jpg", matched: false, flipped: false },
  ];

  return (
    <div className="gameWrapper">
      <Game cards={hardArray} gridName={"hardGrid"} level={'hard'} time={60}/>
    </div>
  );
};

export default Hard;
