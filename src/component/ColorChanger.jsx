import React, { useState } from "react";
import "../App.css";

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };
  //   Random color  work done with help of ChatGpt
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBgColor(color);
  };

  return (
    <div
      className="color"
      style={{ backgroundColor: bgColor, height: "50vh", padding: "20px" }}
    >
      <h2>Change Background Color</h2>
      <div className="current">Current Color : {bgColor}</div>
      <div className="colorButtom">
        <button onClick={() => changeColor("red")}>Red</button>
        <button onClick={() => changeColor("blue")}>Blue</button>
        <button onClick={() => changeColor("green")}>Green</button>
        <button onClick={() => changeColor("white")}>Reset</button>
        <button onClick={randomColor}>Random Color</button>
      </div>
    </div>
  );
};
export default ColorChanger;
