import React from "react";
import styled from "styled-components";

const Partners = () => {
  return (
    <CarouselContainer>
      <CarouselItem>
        <CarouselItemTitle>Partner</CarouselItemTitle>
        <CarouselItemTitle>Partner</CarouselItemTitle>
        <CarouselItemTitle>Partner</CarouselItemTitle>
        <CarouselItemTitle>Partner</CarouselItemTitle>
        <CarouselItemTitle>Partner</CarouselItemTitle>
        <CarouselItemText>one</CarouselItemText>
      </CarouselItem>
    </CarouselContainer>
  );
};

export default Partners;

const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0f1636;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type {
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 960px) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
const CarouselMobileScrollNode = styled.div`
  @media screen and (min-width: 960px) {
    display: flex;
    min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
  }
`;
const CarouselItem = styled.div`
  background: #0f1636;
  border-radius: 3px;
  max-width: 196px;
  display: grid;

  @media screen and (min-width: 960px) {
    max-width: 124px;
  }

  @media screen and (min-width: 960px) {
    margin-left: 32px;
    min-width: 120px;
    background: #0e131f;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;

    /* ${(props) =>
      props.active === props.index ? `opacity: 1` : `opacity: 0.5`};  */
  }
`;
const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media screen and (min-width: 960px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }

  @media screen and (min-width: 960px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;

  @media screen and (min-width: 960px) {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;

const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media screen and (min-width: 960px) {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media screen and (min-width: 960px) {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
