import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  //    [value,  function to update] = useState<string>("Chocolate")
  //    ^^ needs to be datatype ====> String
  const [flavor, setFlavor] = useState("Chocolate");
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState(44);
  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <div className={`ad ${darkTheme === true ? "dark-theme" : ""}`}>
        <p>Vote for:</p>
        {/* javascript {{object}} */}
        <p style={{ fontSize: `${fontSize}px` }}>{flavor}</p>
      </div>
      <div>
        <p>What to support</p>
        <div>
          <button
            onClick={() => {
              setFlavor("Chocolate");
            }}
          >
            Chocolate
          </button>
          <button
            onClick={() => {
              setFlavor("Vanilla");
            }}
          >
            Vanilla
          </button>
          <button
            onClick={() => {
              setFlavor("Strawberry");
            }}
          >
            Strawberry
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setDarkTheme(false);
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setDarkTheme(true);
          }}
        >
          Dark
        </button>
      </div>
      <h3>Font Size</h3>
      <div>
        <button
          onClick={() => {
            setFontSize((prev) => {
              return prev + 1;
            });
          }}
        >
          up
        </button>
        <button
          onClick={() => {
            setFontSize((prev) => {
              return prev - 1;
            });
          }}
        >
          down
        </button>
      </div>
    </section>
  );
};

export default AdDesigner;
