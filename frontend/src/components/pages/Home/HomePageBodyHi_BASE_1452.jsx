import React from "react";
import BodyCard from "./BodyCard";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
  h1 {
    margin-top:10px;
    font-size: 3rem;
    font-weight: bold;
    font-family: "Open Sans", sans-serif;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 100%;
    }
  }
`;

function HomePageBody() {
  return (
    <Container>
      <h1>
महिला स्वास्थ्य क्यों आवश्यक है?</h1>
      <BodyCard
        img="https://i.pinimg.com/originals/8a/28/8f/8a288fc55156d4dceffe0b47cb9c89ea.jpg"
        para="स्वास्थ्य देखभाल सभी के लिए आवश्यक है, इसके पुरुष या महिला मौसम|"
        id={1}
      />
      <BodyCard
        img="https://i.pinimg.com/originals/a3/04/05/a30405aa47967c5b9ab46896312df093.jpg"
        heading="स्वस्थ रहें"
        para="इस वेब एप्लिकेशन का उपयोग करके महिलाएं आसानी से अपने स्वास्थ्य का सामना कर सकती हैं।"
        id={2}
      />
    </Container>
  );
}

export default HomePageBody;
