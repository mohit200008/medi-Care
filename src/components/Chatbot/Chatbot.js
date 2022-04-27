import React, { useState } from "react";
import "../../styles/Chatbot.css";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useHistory } from "react-router-dom";
import funfacts from "./Funfacts";

const theme = {
  background: "#F4F5F6",
  fontFamily: "sans-serif",
  headerBgColor: "#15bea9",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#65b1ff",
  botFontColor: "#fff",
  userBubbleColor: "#59dd64",
  userFontColor: "#fff",
};

const steps = [
  {
    id: "1",
    message: "Hey! I am Medi-bot, how are you feeling today",
    trigger: "expressions",
  },
  {
    id: "expressions",
    options: [
      { value: "veryHappy", label: "😀", trigger: "veryHappy" },
      { value: "happy", label: "🙂", trigger: "happy" },
      { value: "normal", label: "😐", trigger: "normal" },
      { value: "sad", label: "☹️", trigger: "sad" },
      { value: "angry", label: "😡", trigger: "angry" },
    ],
  },
  {
    id: "veryHappy",
    message: "Great Me too.",
    trigger: "help",
  },
  {
    id: "happy",
    message:
      "Hmm, Looks Like You are in good mood. Well I can make it great.",
    trigger: "help",
  },
  {
    id: "normal",
    message:
      "Ooh, Are You Confused Sir ? Don't Worry I am here to Assist You.",
    trigger: "help",
  },
  {
    id: "sad",
    message:
      "I am sorry to here that. Well i would suggest to read our random Fun-fact or Visit our Yoga Services or Read the latest feeds. You will feel better.",
    trigger: "help",
  },
  {
    id: "angry",
    message:
      "Oops, Did i do something wrong....But wait i am a bot i can't do that...  Well i suggest you to relax your mind, play some games,  watch some movies  and eat a lot of healthy tasty food just like me..",
    trigger: "help",
  },
  {
    id: "help",
    message: "How can I help you?",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      { value: "services", label: "Services", trigger: "services" },
      {
        value: "calculateBMI",
        label: "Calculate BMI",
        trigger: "calculateBMI",
      },
      {
        value: "funFact",
        label: "Give a random funfact",
        trigger: "funFact",
      },
      { value: "exit", label: "Exit", trigger: "end" },
    ],
  },
  {
    id: "services",
    message: "select one of these services",
    trigger: "selectServices",
  },
  {
    id: "selectServices",
    options: [
      { value: "health", label: "Smart BMI", trigger: "selectedService" },
      { value: "Disease Detection", label: "Disease Detection", trigger: "selectedService" },
      { value: "goBack", label: "go back", trigger: "options" },
    ],
  },
  {
    id: "selectedService",
    message: "opened {previousValue}",
    trigger: "end",
  },
  {
    id: "moreHelp",
    message: "do you meed more help?",
    trigger: "moreHelp-yes",
  },
  {
    id: "moreHelp-yes",
    options: [
      { value: "yes", label: "Yes", trigger: "help" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },
  {
    id: "calculateBMI",
    message: "Let's calculate your BMI",
    trigger: "BMIHeightMessage",
  },
  {
    id: "BMIHeightMessage",
    message: "Enter your height(in cm.)",
    trigger: "BMIHeight",
  },
  {
    id: "BMIHeight",
    user: true,
    validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
    trigger: "BMIWeightMessage",
  },
  {
    id: "BMIWeightMessage",
    message: "Enter your weight(in kg)",
    trigger: "BMIWeight",
  },
  {
    id: "BMIWeight",
    user: true,
    validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
    trigger: "BMIResult",
  },
  {
    id: "BMIResult",
    component: <BMI />,
    asMessage: true,
    trigger: "BMIKnowMore",
  },
  {
    id: "BMIKnowMore",
    message: "Want to know more about BMI?",
    trigger: "BMIKnowMore-options",
  },
  {
    id: "BMIKnowMore-options",
    options: [
      { value: "health", label: "Yes", trigger: "selectedService" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },
  {
    id: "funFact",
    component: <FunFact />,
    asMessage: true,
    trigger: "moreHelp",
  },
  {
    id: "end",
    message: "Thank you, see you again!",
    end: true,
  },
];

function BMI({ steps }) {
  return (
    <div>
      Your BMI is{" "}
      {(
        (steps.BMIWeight.value /
          (steps.BMIHeight.value * steps.BMIHeight.value)) *
        10000
      ).toFixed(2)}
    </div>
  );
}

function FunFact() {
  const randInt = Math.floor(Math.random() * 14);
  return <div>{funfacts[randInt]}</div>;
}

function Chatbot() {
  const history = useHistory();
  const handleEnd = ({ steps, values }) => {
    switch (values[values.length - 1]) {
      case "home":
        history.push("/");
        break;
      case "Disease Detection":
        history.push("/DiseaesPred");
        break;
      case "health":
        history.push("/health");
      case "Doctor":
        history.push("/Doctor");
        break;
      default:
        break;
    }
  };

  return (
    <div className="chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          handleEnd={handleEnd}
          headerTitle="Chatbot"
          speechSynthesis={{ enable: true, lang: 'en' }}
          botAvatar={"https://e7.pngegg.com/pngimages/811/700/png-clipart-chatbot-internet-bot-business-natural-language-processing-facebook-messenger-business-people-logo-thumbnail.png"}
          avatarStyle={{ borderRadius: "100%" }}
          floating={true}
          floatingIcon={
            <img
              src={"https://e7.pngegg.com/pngimages/811/700/png-clipart-chatbot-internet-bot-business-natural-language-processing-facebook-messenger-business-people-logo-thumbnail.png"}
              style={{ width: "70%" }}
              alt="chatBot icon"
            />
          }
          floatingStyle={{
            backgroundColor: "#ffffff",
            width: "60px",
            boxShadow: "2px 2px 20px -8px #111",
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default Chatbot;
