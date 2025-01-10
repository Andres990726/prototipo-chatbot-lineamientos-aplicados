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
  botName: "Asistente Médico",
  initialMessages: [
    createChatBotMessage(
      "¡Hola! Soy tu asistente virtual de salud. Estoy aquí para ayudarte con tus citas médicas y otros servicios. Entiendo que a veces estas tareas pueden ser complicadas, pero no te preocupes, te guiaré en cada paso. ¿Qué necesitas hacer hoy?",
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
