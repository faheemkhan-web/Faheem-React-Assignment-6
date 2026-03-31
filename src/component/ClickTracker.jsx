import React, { useState } from "react";
import "../App.css"
const ClickTracker = () => {
  const [click, setClick] = useState(0);

  return (
    <div className="Click">
      <h2>Button Click count {click}</h2>
      <div className="buttons">
        <button onClick={() => setClick(click + 1)}>Like</button>
      <button onClick={() => setClick(click + 1)}>Share</button>
      <button onClick={() => setClick(click + 1)}>Subscribe</button>
      </div>
    </div>
  );
};
export default ClickTracker;
