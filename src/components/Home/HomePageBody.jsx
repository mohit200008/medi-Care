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

  // media quries
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
      <h1>Why is health essential?</h1>
      <BodyCard
        img="https://i.pinimg.com/originals/8a/28/8f/8a288fc55156d4dceffe0b47cb9c89ea.jpg"
        para="Health is the factor that helps a person perform his daily life tasks in a correct and right way. Health care is essential for everyone, whether its a men or women."
        id={1}
      />
      <BodyCard
        img="https://i.pinimg.com/originals/a3/04/05/a30405aa47967c5b9ab46896312df093.jpg"
        heading="Stay Healthy"
        para="Using this web application women can easily keep track of their health."
        id={2}
      />
    </Container>
  );
}

export default HomePageBody;
