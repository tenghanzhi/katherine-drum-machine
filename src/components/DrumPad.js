import React from "react";

const DrumPad = ({ pad, power, volume, onDisplay }) => {
  const playSound = () => {
    const audio = new Audio(
      `https://s3.amazonaws.com/freecodecamp/drums/${pad.url}.mp3`
    );
    audio.volume = volume / 100;
    if (power) audio.play();
    onDisplay(pad.display);
  };

  return (
    <button className="drum-pad" id={`pad${pad.content}`} onClick={playSound}>
      {pad.content}
    </button>
  );
};

export default DrumPad;
