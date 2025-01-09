import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
  state,
}) => {
  const [data, setData] = useState({
    id: "",
    service: "",
    location: "",
    time: "",
  });

  const handleScheduleAppointment = () => {
    const message = createChatBotMessage(
      "¡Entendido! Vamos a programar tu cita médica. Este es el proceso que seguiremos:"
    );
    const message1 = createChatBotMessage("1. Verificaremos tu identidad.");
    const message2 = createChatBotMessage(
      "2. Escogeremos el tipo de cita que necesitas."
    );
    const message3 = createChatBotMessage(
      "3. Seleccionaremos la ubicación y el horario."
    );
    const message4 = createChatBotMessage("4. Confirmaremos tu cita.");
    const botMessage = createChatBotMessage(
      "Perfecto, puedo ayudarte a programar una cita. Por favor, dime si es para ti o para otra persona.",
      { widget: "patientOptions" }
    );
    setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        message,
        message1,
        message2,
        message3,
        message4,
        botMessage,
      ],
    }));
  };
  const handleViewAppointments = () => {
    const message = createChatBotMessage(
      "Aquí están tus citas programadas: [listado de citas]"
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleTalkToAdvisor = () => {
    const message = createChatBotMessage("Conectándote con un asesor...");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleAskForID = () => {
    const message = createChatBotMessage(
      "Primero, necesitamos confirmar tu identidad para proteger tu información. Por favor, ingresa tu número de identificación (cédula)"
    );
    setState((prevState) => ({
      ...prevState,
      expectingID: true,
      messages: [...prevState.messages, message],
    }));
  };

  const handleInvalidID = () => {
    const message = createChatBotMessage(
      "El número de identificación ingresado no es válido. Por favor, ingresa solo números."
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleIDInput = (id) => {
    setState((prevState) => ({ ...prevState, expectingID: false }));
    setData({ ...data, id });
    const message = createChatBotMessage(
      "¡Gracias! Tu información está segura conmigo. Ahora continuemos."
    );
    const botMessage = createChatBotMessage(
      "¿Qué tipo de servicio médico necesitas? Selecciona una de las opciones:",
      { widget: "serviceOptions" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message, botMessage],
    }));
  };

  const handleSelectService = (service) => {
    setData({ ...data, service });
    const message = createChatBotMessage(
      `Seleccionaste ${service}. Por favor, selecciona la ciudad o municipio donde deseas programar tu cita.`,
      { widget: "locationOptions" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleSelectLocation = (location) => {
    setData({ ...data, location });
    const message = createChatBotMessage(
      `Seleccionaste ${location}. Ahora selecciona el horario que más te convenga.`,
      { widget: "timeOptions" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleSelectTime = (time) => {
    setData({ ...data, time });
    const message = createChatBotMessage(
      `Cita confirmada: \nServicio: ${data.service} \nLugar: ${data.location} \nHora: ${time}. \n¿Es correcto?`,
      {
        widget: "endOptions",
      }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleConfirmAppointment = () => {
    const message = createChatBotMessage(
      `¡Cita programada con éxito! \nDetalles: \nServicio: ${data.service} \nLugar: ${data.location} \nHora: ${data.time}. ¿Hay algo más en lo que pueda ayudarte?`,
      { widget: "endOptions" }
    );
    const message2 = createChatBotMessage(
      "¡Cita programada con éxito! Recibirás un mensaje de confirmación en tu celular. Si necesitas cancelar o modificar, estoy aquí para ayudarte. ¿Hay algo más que quieras hacer?"
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message2, message],
    }));
  };

  const handleUnknownMessage = () => {
    const message = createChatBotMessage(
      "Lo siento, no entendí tu mensaje. ¿Puedes intentarlo de nuevo?"
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleScheduleAppointment,
            handleViewAppointments,
            handleTalkToAdvisor,
            handleAskForID,
            handleInvalidID,
            handleIDInput,
            handleSelectService,
            handleSelectLocation,
            handleSelectTime,
            handleConfirmAppointment,
            handleUnknownMessage,
          },
          state,
        });
      })}
    </div>
  );
};
ActionProvider.propTypes = {
  createChatBotMessage: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  state: PropTypes.object,
};

export default ActionProvider;
