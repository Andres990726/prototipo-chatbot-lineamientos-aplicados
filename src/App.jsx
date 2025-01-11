import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./chatbotStyles.css";

import config from "./components/Config";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";
import { useState } from "react";
import HelpModal from "./components/HelpModal";

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
      <div className="floating-buttons">
        <button
          onClick={toggleTheme}
          className="floating-button"
          title={
            theme === "theme-light" ? "Activar modo noche" : "Activar modo día"
          }
        >
          {theme === "theme-light" ? (
            <i className="fas fa-moon"></i> // Luna para modo noche
          ) : (
            <i className="fas fa-sun"></i> // Sol para modo día
          )}
        </button>
        <button
          onClick={() => setSize("text-small")}
          className="floating-button"
          title="Reducir tamaño de texto"
        >
          <i className="fas fa-minus"></i>
        </button>
        <button
          onClick={() => setSize("text-medium")}
          className="floating-button"
          title="Tamaño de texto mediano"
        >
          <i className="fas fa-text-height"></i>
        </button>
        <button
          onClick={() => setSize("text-large")}
          className="floating-button"
          title="Aumentar tamaño de texto"
        >
          <i className="fas fa-plus"></i>
        </button>
        <HelpModal />
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
