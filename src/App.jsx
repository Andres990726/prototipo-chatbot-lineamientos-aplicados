import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./chatbotStyles.css";

import config from "./components/Config";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("theme-light"); // Día por defecto
  const [textSize, setTextSize] = useState("text-medium"); // Mediano por defecto

  const toggleTheme = () => {
    setTheme(theme === "theme-light" ? "theme-dark" : "theme-light");
  };

  const setSize = (size) => {
    setTextSize(size);
  };
  return (
    <div className={`${theme} ${textSize}`}>
      <div style={{ padding: "10px" }}>
        <button onClick={toggleTheme}>
          {theme === "theme-light" ? "Modo Noche" : "Modo Día"}
        </button>
        <button onClick={() => setSize("text-small")}>A-</button>
        <button onClick={() => setSize("text-medium")}>A</button>
        <button onClick={() => setSize("text-large")}>A+</button>
      </div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
