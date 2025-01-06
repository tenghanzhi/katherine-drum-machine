import React, { useState } from "react";
import "./App.css";
import DrumPad from "./components/DrumPad";

const App = () => {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);
  const [volume, setVolume] = useState(50);

  const drumData = [
    { content: "Q", url: "Heater-1", display: "Heater 1", keyCode: 81 },
    { content: "W", url: "Heater-2", display: "Heater 2", keyCode: 87 },
    { content: "E", url: "Heater-3", display: "Heater 3", keyCode: 69 },
    { content: "A", url: "Heater-4_1", display: "Heater 4", keyCode: 65 },
    { content: "S", url: "Heater-6", display: "Clip", keyCode: 83 },
    { content: "D", url: "Dsc_Oh", display: "Open HH", keyCode: 68 },
    { content: "Z", url: "Kick_n_Hat", display: "Kick n' Hat", keyCode: 90 },
    { content: "X", url: "RP4_KICK_1", display: "Kick", keyCode: 88 },
    { content: "C", url: "Cev_H2", display: "Closed HH", keyCode: 67 },
  ];

  const bankData = [
    { content: "Q", url: "Chord_1", display: "Chord 1", keyCode: 81 },
    { content: "W", url: "Chord_2", display: "Chord 2", keyCode: 87 },
    { content: "E", url: "Chord_3", display: "Chord 3", keyCode: 69 },
    { content: "A", url: "Give_us_a_light", display: "Shake", keyCode: 65 },
    { content: "S", url: "Dry_Ohh", display: "Open HH", keyCode: 83 },
    { content: "D", url: "Bld_H1", display: "Closed HH", keyCode: 68 },
    { content: "Z", url: "punchy_kick_1", display: "Punchy Kick", keyCode: 90 },
    { content: "X", url: "side_stick_1", display: "Side Stick", keyCode: 88 },
    { content: "C", url: "Brk_Snr", display: "Snare", keyCode: 67 },
  ];

  const data = bank ? bankData : drumData;

  const handleDisplay = (message) => setDisplay(message);

  return (
    <div id="drum-machine-wrapper">
      <div id="drum-machine">
        <div id="drum-pad-wrapper">
          {data.map((pad) => (
            <DrumPad
              key={pad.content}
              pad={pad}
              power={power}
              volume={volume}
              onDisplay={handleDisplay}
            />
          ))}
        </div>
        <div id="controls-wrapper">
          <div className="power-wrapper">
            <div className="power-text">Power</div>
            <div
              className="power-item"
              onClick={() => {
                setPower(!power);
                setDisplay(power ? "Off" : "On");
              }}
            >
              <div
                className="power-switch"
                style={{ float: power ? "right" : "left" }}
              ></div>
            </div>
          </div>
          <div id="display">{display}</div>
          <input
            id="volumeInput"
            max="100"
            min="0"
            step="1"
            type="range"
            value={volume}
            onChange={(e) => {
              setVolume(e.target.value);
              setDisplay(`Volume: ${e.target.value}`);
            }}
          />
          <div className="bank-wrapper">
            <div className="bank-text">Bank</div>
            <div
              className="bank-item"
              onClick={() => {
                setBank(!bank);
                setDisplay(bank ? "Drum" : "Bank");
              }}
            >
              <div
                className="bank-switch"
                style={{ float: bank ? "right" : "left" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
