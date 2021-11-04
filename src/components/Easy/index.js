import React, {useState} from "react";
import Game from "../Game";
import "./style.css";

const Easy = () => {
  const easyArray = [
    { name: "pic1", image: "./img/p1.jpeg", matched: false, flipped: false },
    { name: "pic2", image: "./img/p2.jpeg", matched: false, flipped: false },
    { name: "pic3", image: "./img/p3.jpeg", matched: false, flipped: false },
  ];

  return (
    <div className="easyWrapper">
      <div className="easyGrid">
        <Game cards={easyArray}/>;
      </div>
    </div>
  );
};

export default Easy;
