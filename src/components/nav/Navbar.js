import React, { useState, useRef } from "react";
import Pages from "./Pages";
import styled from "styled-components";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };

  return (
    <NavContainer>
      <Nav>
        <H1>
          {" "}
          <ShopTwoIcon /> Eshop
        </H1>
        <div></div>
        <Form
          barOpened={barOpened}
          onClick={() => {
            // When form clicked, set state of baropened to true and focus the input
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          // on focus open search bar
          onFocus={() => {
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          // on blur close search bar
          onBlur={() => {
            setBarOpened(false);
          }}
          // On submit, call the onFormSubmit function
          onSubmit={onFormSubmit}
          ref={formRef}
        >
          <Button type="submit" barOpened={barOpened}>
            <SearchIcon />
          </Button>
          <Input
            onChange={(e) => setInput(e.target.value)}
            ref={inputFocus}
            value={input}
            barOpened={barOpened}
            placeholder="Search"
          />
        </Form>
        <div></div>
        <AccountIcons>
          <Div1>
            <div>
              <PersonIcon />
              <br />
              <Label>Account</Label>
            </div>
            <div>
              <FavoriteIcon />
              <br />
              <Label>Wishlist</Label>
            </div>
            <div>
              <ShoppingCartIcon />
              <br />
              <Label>Account</Label>
            </div>
          </Div1>
        </AccountIcons>
      </Nav>
      <Pages />
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  width: 100%;
  justify-content: center;
  /* background-color: red; */
  @media (max-width: 576px) {
    width: 100%;
    /* display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem; */
  }

`;
const Nav = styled.nav`
  /* background: red; */
  font-family: cursive;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 5rem;
  padding: 0.5rem;
  padding-top: 1rem;
  background: #0f1636;
  @media (max-width: 576px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
const H1 = styled.h1`
  font-family: cursive;
  color: #37474f;
  padding-left: 10px;
  font-size: 35px;
  ;
  @media (max-width: 576px) {
    padding-left: 3px;
    font-size: 20px;
  }
`;
const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? "20rem" : "0.5rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 0.5rem;
  border-radius: 5rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  @media (max-width: 576px) {
    width: ${(props) => (props.barOpened ? "5rem" : "0.1rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 1.5rem;
  height: 0.1rem;
  border-radius: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;
const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;
const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;
const AccountIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  /* float: right; */
  &:hover {
    /* background-color: #212d45; */
    transform: scale(1.2);
    cursor: pointer;
  }
`;
const Div1 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* float: right; */
`;
const Label = styled.label`
  font-family: cursive;
  font-size: 10px;
`;
