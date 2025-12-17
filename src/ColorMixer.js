import { useState } from "react";

export default function ColorMixer({ color, onColorChange }) {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  const [colorStyle, setColorStyle] = useState("rgb(0, 0, 0)");
  function handleRed(e) {
    const value = Number(e.target.value);
    setRed(value);
    updateColor({ ...color, r: value });
  }
  function handleGreen(e) {
    const value = Number(e.target.value);
    setGreen(value);
    updateColor({ ...color, g: value });
  }
  function handleBlue(e) {
    const value = Number(e.target.value);
    setBlue(value);
    updateColor({ ...color, b: value });
  }
  function updateColor(color) {
    setColorStyle(`rgb(${red}, ${green}, ${blue})`);
    onColorChange({ r: red, g: green, b: blue });
  }
  return (
    <div className="sliders">
      <div className="sliderRow">
        <div className="sliderLabel">R</div>
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={handleRed}
        />
        <div className="sliderValue">{red}</div>
      </div>

      <div className="sliderRow">
        <div className="sliderLabel">G</div>
        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={handleGreen}
        />
        <div className="sliderValue">{green}</div>
      </div>

      <div className="sliderRow">
        <div className="sliderLabel">B</div>
        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={handleBlue}
        />
        <div className="sliderValue">{blue}</div>
      </div>
      <div
        className="sliderRow sliderRowPreview"
        style={{ backgroundColor: colorStyle }}
      >
        <span className="colorLabel">{colorStyle}</span>
      </div>
    </div>
  );
}
