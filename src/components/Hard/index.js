import React from "react";
import Game from "../Game";
import "./style.css";

const Hard = () => {
    const hardArray = [
        { name: "pic1", image: "./img/p1.jpeg", matched: false, flipped: false },
        { name: "pic2", image: "./img/p2.jpeg", matched: false, flipped: false },
        { name: "pic3", image: "./img/p3.jpeg", matched: false, flipped: false },
        { name: "pic4", image: "./img/p4.jpeg", matched: false, flipped: false },
        { name: "pic5", image: "./img/p5.jpeg", matched: false, flipped: false },
        { name: "pic6", image: "./img/p6.jpeg", matched: false, flipped: false },
        { name: "pic4", image: "./img/p7.jpeg", matched: false, flipped: false },
        { name: "pic5", image: "./img/p8.jpeg", matched: false, flipped: false },
        { name: "pic6", image: "./img/p9.jpeg", matched: false, flipped: false },
        { name: "pic6", image: "./img/p10.jpeg", matched: false, flipped: false },
      ];
        
     return (
       <div className="easyWrapper">
        <div className="easyGrid">
         <Game cards={hardArray}/>;
          </div>
            </div>
          );
        };

export default Hard;
