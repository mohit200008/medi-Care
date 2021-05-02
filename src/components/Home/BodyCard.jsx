import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 65vh;
  margin: 0.2rem auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  box-sizing: border-box;
  img {
    max-width: 100%;
    height: 100%;
    opacity: 0.8;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 2rem;
  }
  .text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 0 0;
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    margin: 1rem auto;
    grid-template-columns: 1fr 2fr;
    .text {
      h1 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
`;

function BodyCard({ img, heading, para, id }) {
  return (
    <Container>
      <img
        src={img}
        alt="womenwithlaptop"
        style={{ order: id % 2 === 0 ? 2 : 0 }}
        width="10000px"
        height="150px"
      />
      <div className="text">
        <h1>{heading}</h1>
        <p>{para}</p>
      </div>
    </Container>
  );
}

export default BodyCard;
