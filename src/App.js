import { useState } from "react";

export default function App() {
  const [color1, setColor1] = useState({ r: 0, g: 0, b: 0 });
  const [color2, setColor2] = useState({ r: 0, g: 0, b: 0 });
  const [color3, setColor3] = useState("rgb(0,0,0)");
  function handleColor1(color) {
    setColor1(color);
  }
  function handleColor2(color) {
    setColor2(color);
  }

  function handleColorMix() {
    setColor3(
      `rgb(${Math.round((color1.r + color2.r) / 2)},${Math.round(
        (color1.g + color2.g) / 2
      )},${Math.round((color1.b + color2.b) / 2)})`
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Color Mixer</h1>
        <p>Adjust both colors, then mix them together</p>
      </header>
      <div className="mixerGrid">
        <section className="panel">
          <h2 className="panelTitle">Color 1</h2>
          <ColorMixer color={color1} onColorChange={handleColor1} />
        </section>
        <section className="panel previewPanel">
          <h2 className="panelTitle">Mixed Color</h2>

          <div className="previewBox">
            <div
              className="previewOverlay"
              style={{ backgroundColor: color3 }}
            ></div>
          </div>

          <div className="previewMeta">
            <div className="colorReadout">{color3}</div>
            <button className="mixButton" onClick={handleColorMix}>
              Mix
            </button>
          </div>
        </section>
        <section className="panel">
          <h2 className="panelTitle">Color 2</h2>
          <ColorMixer color={color2} onColorChange={handleColor2} />
        </section>
      </div>
    </div>
  );
}

function ColorMixer({ color, onColorChange }) {
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
