import logoImage from "./assets/logo.svg";
import dollarIcon from "./assets/icon-dollar.svg";
import personIcon from "./assets/icon-person.svg";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const tipAmount = (((bill / people) * tip) / 100).toFixed(2);
  const total = ((bill * (1 + tip / 100)) / people).toFixed(2);

  function ToggleTipButton(e) {
    const tipItems = document.querySelectorAll(".tip-item");
    tipItems.forEach((item) => item.classList.remove("active"));
    e.target.classList.toggle("active");
    setTip(Number(e.target.innerText.slice(0, e.target.innerText.length - 1)));
  }

  function ResetCalculator() {
    const inputTexts = document.querySelectorAll(".input-text");
    inputTexts.forEach((item) => (item.value = ""));

    const tipItems = document.querySelectorAll(".tip-item");
    tipItems.forEach((item) => item.classList.remove("active"));

    const customTip = document.querySelector(".custom-tip");
    customTip.value = "";

    setBill(0);
    setPeople(0);
    setTip(0);
  }

  function CustomTip(e) {
    const tipItems = document.querySelectorAll(".tip-item");
    tipItems.forEach((item) => item.classList.remove("active"));
    setTip(e.target.value);
  }

  return (
    <>
      <img src={logoImage} alt="logo" className="logo" />
      <div className="container">
        <div className="setup-side">
          <h3 className="mini-title">Bill</h3>
          <div className="input-field">
            <img src={dollarIcon} alt="dollar icon" className="input-icon" />
            <input
              type="text"
              placeholder="0"
              className="input-text"
              onChange={(e) => setBill(e.target.value)}
            />
          </div>

          <h3 className="mini-title">Select Tip %</h3>
          <div className="tip-row">
            <div className="tip-item" onClick={ToggleTipButton}>
              5%
            </div>
            <div className="tip-item" onClick={ToggleTipButton}>
              10%
            </div>
            <div className="tip-item" onClick={ToggleTipButton}>
              15%
            </div>
            <div className="tip-item" onClick={ToggleTipButton}>
              25%
            </div>
            <div className="tip-item" onClick={ToggleTipButton}>
              50%
            </div>
            <input
              type="text"
              className="custom-tip"
              placeholder="Custom"
              onChange={CustomTip}
            />
          </div>

          <h3 className="mini-title">Number Of People</h3>
          <div className="input-field">
            <img src={personIcon} alt="dollar icon" className="input-icon" />
            <input
              type="text"
              placeholder="0"
              className="input-text"
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>
        </div>
        <div className="result-side">
          <div className="result-row">
            <div className="left-side">
              <h3 className="result-name">Tip Amount</h3>
              <h4 className="person">/ person</h4>
            </div>
            <h2 className="total-amount">
              ${tipAmount > 0 && tipAmount != Infinity ? tipAmount : 0}
            </h2>
          </div>
          <div className="result-row">
            <div className="left-side">
              <h3 className="result-name">Total</h3>
              <h4 className="person">/ person</h4>
            </div>
            <h2 className="total-amount">
              ${total > 0 && total != Infinity ? total : 0}
            </h2>
          </div>
          <button className="btn" onClick={ResetCalculator}>
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
