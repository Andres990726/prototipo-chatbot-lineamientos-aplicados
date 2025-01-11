import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./HelpModal.css"; // Asegúrate de incluir los estilos adjuntos

const HelpModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón flotante de ayuda */}
      <button
        className="floating-button"
        onClick={toggleModal}
        title="Abrir ayuda"
      >
        <i className="fas fa-question-circle"></i>
      </button>

      {/* Modal de ayuda */}
      {isOpen && (
        <div className="help-modal-overlay">
          <div className="help-modal">
            <h2>¿Cómo usar este chatbot?</h2>
            <ul>
              <li>
                <strong>Opciones flotantes:</strong>
                <ul>
                  <li>
                    <strong>🌞/🌙:</strong> Cambia entre modo Día y Noche para
                    ajustar los colores.
                  </li>
                  <li>
                    <strong>A-, A, A+:</strong> Ajustan el tamaño del texto
                    (pequeño, mediano, grande).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Envío de mensajes:</strong> Escribe tu mensaje en la
                barra blanca y presiona el botón de enviar (<strong>📩</strong>
                ).
              </li>
              <li>
                <strong>Opciones rápidas:</strong> Si no quieres escribir,
                selecciona una de las opciones disponibles haciendo clic en
                ellas.
              </li>
              <li>
                <strong>Asistencia humana:</strong> Un asesor puede ayudarte en
                cualquier momento. Escribe “necesito ayuda”.
              </li>
              <li>
                <strong>Consejos adicionales:</strong>
                <ul>
                  <li>
                    Lee las respuestas con calma, no necesitas apresurarte.
                  </li>
                  <li>
                    Ajusta el tamaño del texto o los colores para sentirte más
                    cómodo.
                  </li>
                </ul>
              </li>
            </ul>
            <button
              className="close-button"
              onClick={toggleModal}
              aria-label="Cerrar ayuda"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpModal;
