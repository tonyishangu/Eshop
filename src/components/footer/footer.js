import React from "react";
import styled from "styled-components";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import Contact from "./Contact";

const footer = () => {
  return (
    <FooterContainer>
      <About>
        <H1>
          {" "}
          <ShopTwoIcon /> Eshop
        </H1>
        <br />
        <p>
          Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,
          eu vulputate magna eros eu erat.Aliquam erat volutpat. Nam dui mi,
          tincidunt quis, accumsan porttitor, facilisis luctus, metus.
        </p>
        <br />
        <Querry>
          <P2>Got Question? Call us 24/7</P2>
          <H3>+254798567458</H3>
        </Querry>
      </About>
      <Contact />
    </FooterContainer>
  );
};

export default footer;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 64vh;
  /* background-color: #0f1636; */
  /* color: #000; */
  /* padding: 0; */
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  display: grid;
  grid-gap: 1rem;
  /* align-items: center; */
  justify-content: center;
  grid-template-columns: 1fr;
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 2px;
    padding-right: 2px;
  }
`;

const H1 = styled.h1`
  font-family: cursive;
  color: #37474f;
  padding-left: 10px;
  font-size: 35px;
  @media (max-width: 576px) {
    padding-left: 3px;
    font-size: 20px;
  }
`;
const H3 = styled.h3`
  font-family: cursive;
  color: #37474f;
  /* padding-left: 10px; */
  /* font-size: 35px; */
  @media (max-width: 576px) {
    padding-left: 3px;
    /* font-size: 20px; */
  }
`;
const About = styled.div`
  font-family: cursive;
  color: #0f1636;
`;
const P2 = styled.p`
  color: green;
`;
const Querry = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  display: grid;
  grid-gap: 1rem;
  /* align-items: center; */
  justify-content: center;
  grid-template-columns: 1fr;
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 2px;
    padding-right: 2px;
  }
`;
