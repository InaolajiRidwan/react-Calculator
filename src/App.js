import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  return (
    <div className="App">
      <div className="container">
        <div className="result">
          <input type="text" className="result" id="result-box" value={calc} />
        </div>

        <div className="buttons">
          <div className="button-action-btn">
            <input
              className="button-action-btn"
              type="button"
              value="AC"
              onClick={() => setCalc("")}
            />
          </div>
          <div className="button-action-btn">
            <input
              className="button-action-btn"
              type="button"
              value="DC"
              onClick={(event) => setCalc(calc.slice(0, -1))}
            />
          </div>
          <div className="button num-button action-btn">
            <input
              className="button-action-btn"
              type="button"
              value="00"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button calc-action-btn">
            <input
              className="button-action-btn"
              type="button"
              value="/"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button seven">
            <input
              className="button-action-btn"
              type="button"
              value="7"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button eight">
            <input
              className="button-action-btn"
              type="button"
              value="8"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button nine">
            <input
              className="button-action-btn"
              type="button"
              value="9"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button calc-action-btn">
            <input
              className="button-action-btn"
              type="button"
              value="*"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button four">
            <input
              className="button-action-btn"
              type="button"
              value="4"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button five">
            <input
              className="button-action-btn"
              type="button"
              value="5"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button six">
            <input
              className="button-action-btn"
              type="button"
              value="6"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button calc-action-btn">
            <input
              className="button-action-btn"
              type="button"
              value="-"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button one">
            <input
              className="button-action-btn"
              type="button"
              value="1"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button two">
            <input
              className="button-action-btn"
              type="button"
              value="2"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button three">
            <input
              className="button-action-btn"
              type="button"
              value="3"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button calc-action-btn">
            <input
              className="button-action-btn"
              type="button"
              value="+"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button zero">
            <input
              className="button-action-btn"
              type="button"
              value="0"
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button num-button point">
            <input
              className="button-action-btn"
              type="button"
              value="."
              onClick={(event) => setCalc(calc + event.target.value)}
            />
          </div>
          <div className="button-calc-action-btn" id="total">
            <input
              className="button-action-btn"
              type="button"
              value="="
              onClick={(event) => setCalc(eval(calc))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
