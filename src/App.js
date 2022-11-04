import "./App.css";
import webdesign from "./img/web-and-design-logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClicks, setClicks] = useState(0);

  const counterClick = () => {
    setClicks(numClicks + 1);
  };

  const startClick = () => {
    setClicks(0);
  };

  return (
    <div className="App">
      <div className="web-design-log-container">
        <img className="web-design-logo" src={webdesign} alt="logo" />
      </div>
      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button text="Click" isButtonOpen={true} driveClick={counterClick} />

        <Button text="Start" isButtonOpen={false} driveClick={startClick} />
      </div>
    </div>
  );
}

export default App;
