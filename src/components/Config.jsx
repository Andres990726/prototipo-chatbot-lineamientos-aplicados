import { createChatBotMessage } from "react-chatbot-kit";
import {
  EndOptions,
  LocationOptions,
  PatientOptions,
  ServiceOptions,
  TaskOptions,
  TimeOptions,
} from "./OptionsWidget";

const config = {
  botName: "Asistente de trasnporte",
  initialMessages: [
    createChatBotMessage(
      "¡Hola! Soy tu asistente virtual de viajes. Estoy aquí para ayudarte a reservar tus tiquetes de transporte intermunicipal y responder tus dudas. Sé que este proceso puede parecer complicado a veces, pero no te preocupes, te guiaré paso a paso. ¿En qué puedo ayudarte hoy?",
      {
        widget: "taskOptions",
      }
    ),
  ],

  customComponents: {
    botAvatar: () => (
      <div style={{ fontSize: "2rem", margin: "0 10px" }}>🤖</div>
    ),
    userAvatar: () => (
      <div style={{ fontSize: "2rem", margin: "0 10px" }}>👤</div>
    ),
  },
  state: {
    expectingID: false, // Nueva bandera para controlar la solicitud de cédula
  },
  widgets: [
    {
      widgetName: "taskOptions",
      widgetFunc: (props) => <TaskOptions {...props} />, // Opciones iniciales
    },
    {
      widgetName: "patientOptions",
      widgetFunc: (props) => <PatientOptions {...props} />, // Opciones para quién es la cita
    },
    {
      widgetName: "serviceOptions",
      widgetFunc: (props) => <ServiceOptions {...props} />, // Opciones de servicio médico
    },
    {
      widgetName: "locationOptions",
      widgetFunc: (props) => <LocationOptions {...props} />, // Opciones de ubicación
    },
    {
      widgetName: "timeOptions",
      widgetFunc: (props) => <TimeOptions {...props} />, // Opciones de horarios
    },
    {
      widgetName: "endOptions",
      widgetFunc: (props) => <EndOptions {...props} />, // Opciones para finalizar
    },
  ],
};

export default config;
