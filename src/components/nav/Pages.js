import React from "react";
import styled from "styled-components";

const Pages = ({ open }) => {
  return (
    <LinksContainer>
      {/* <Menu open={open}>
        <a href="/">About us</a>
        <a href="/">Pricing</a>
        <a href="/">Contact</a>
      </Menu> */}
      <Links>
        <Label>Home</Label>
        <Label>Product</Label>
        <Label>Blog</Label>
        {/* <Label>Home</Label>
        <Label>Home</Label> */}
      </Links>
    </LinksContainer>
  );
};

export default Pages;

const LinksContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`;

// const Menu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: #37474f;
//   transform: ${({ open }) =>
//     open ? "translateX(0)" : "translateX(-100%)"};
//   /* height: 100vh; */
//   text-align: left;
//   padding: 2rem;
//   position: relative;
//   top: 0;
//   left: 0;
//   transition: transform 0.3s ease-in-out;

//   @media (max-width: 576px) {
//     width: 100%;
//   }

//   a {
//     font-size: 2rem;
//     text-transform: uppercase;
//     padding: 2rem 0;
//     font-weight: bold;
//     letter-spacing: 0.5rem;
//     color: #0d0c1d;
//     text-decoration: none;
//     transition: color 0.3s linear;

//     @media (max-width: 576px) {
//       font-size: 1.5rem;
//       text-align: center;
//     }

//     &:hover {
//       color: #343078;
//     }
//   }
// `;
const Label = styled.label`
  font-family: cursive;
  font-size: 15px;
  color: #37474f;
`;
const Links = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 0.5rem;
  padding-top: 1rem;
  &:hover {
    /* background-color: #212d45; */
    transform: scale(1.2);
    cursor: pointer;
  }
  @media (max-width: 576px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
