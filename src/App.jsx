import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ClickTracker from "./component/ClickTracker";
import ColorChanger from "./component/ColorChanger";

function App() {
  return (
    <>
      <ClickTracker />
      <ColorChanger />
    </>
  );
}

export default App;
