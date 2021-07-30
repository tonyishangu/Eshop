import React from "react";
import styled from "styled-components";
// import Furniture from "./c"

const Hero = () => {
  return (
    <HeroContainer>
      <SectionText>
        Wooden <br />
        Sideboard Table
      </SectionText>
      <SectionText>Image <img src="/images/desk.png" alt="" /></SectionText>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 64vh;
  background-color: #0f1636;
  /* color: #000; */
  /* padding: 0; */
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  display: grid;
  grid-gap: 1rem;
  align-items: center;
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

const SectionText = styled.p`
  /* max-width: 800px; */
  font-size: 50px;
  line-height: 40px;
  /* font-weight: 300; */
  padding-bottom: 3.6rem;
  /* color: rgba(255, 255, 255, 0.5); */
  font-family: cursive;
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
