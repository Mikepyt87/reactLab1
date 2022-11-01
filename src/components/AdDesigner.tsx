import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate");
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState(44);
  return (
    <section className="AdDesigner">
      <div className={`ad ${darkTheme === true ? "dark-theme" : ""}`}>
        <p>Vote for:</p>
        <p style={{ fontSize: `${fontSize}px` }}>{flavor}</p>
      </div>
      <div>
        <p>What to support</p>
        <div>
          <button>Chocolate</button>
          <button
            onClick={() => {
              setFlavor("Vanilla");
            }}
          >
            Vanilla
          </button>
          <button>Strawberry</button>
        </div>
      </div>
    </section>
  );
};

export default AdDesigner;
