import React from "react";
import Game from "../Game";

const Normal = () => {
  const normalArray = [
    { name: "Dalmatian", image: "./img/Dalmatian.jpg", matched: false, flipped: false },
    { name: "Mickey", image: "./img/Mickey.jpg", matched: false, flipped: false },
    { name: "Winnie", image: "./img/Winnie.jpg", matched: false, flipped: false },
    { name: "Goofy", image: "./img/Goofy.jpg", matched: false, flipped: false },
    { name: "Alice", image: "./img/Alice.jpg", matched: false, flipped: false },
    { name: "Stitch", image: "./img/Stitch.jpg", matched: false, flipped: false },
  ];

  return (
    <div className="gameWrapper">
      <Game cards={normalArray} gridName={'normalGrid'} level={'normal'} time={40} />
    </div>
  );
};

export default Normal;
