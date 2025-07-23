import React from "react";
import Chatbot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Funfacts from "./Funfacts";
import "../../styles/Chatbot.css";
import { useNavigate } from "react-router-dom";

const ChatbotComponent = () => {
  const navigate = useNavigate();

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#32A899",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#32A899",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const config = {
    width: "400px",
    height: "500px",
    floating: true,
  };

  const handleEnd = ({ steps, values }) => {
    if (values.selectedService === "health") {
      navigate("/health");
    } else if (values.selectedService === "Disease Detection") {
      navigate("/DiseaesPred");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Chatbot
        steps={Funfacts}
        handleEnd={handleEnd}
        {...config}
      />
    </ThemeProvider>
  );
};

export default ChatbotComponent;
