import { useState } from "react";
import ColorMixer from "./ColorMixer";

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
