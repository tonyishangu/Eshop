// import { Label } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactContainer>
      <Info>
        <Label>Information</Label>
        <H5>About Eshop</H5>
        <H5>How to Shop</H5>
        <H5>FAQ</H5>
        <H5>Contact Us</H5>
        <H5>Login</H5>

      </Info>
      <Service>
        <Label>Services</Label>
        {/* make them links */}
        <H5>Payment Methods</H5>
        <H5>Money back guarantee</H5>
        <H5>Return</H5>
        <H5>Shipping</H5>
        <H5>Terms and Condition</H5>
        <H5>Privacy Policy</H5>
      </Service>
      <Account>
        <Label>Account Details</Label>
        {/* make them a link */}
        <H5>SignIn</H5>
        <H5>View Cart</H5>
        <H5>My Wishlist</H5>
        <H5>Track my Order</H5>
        <H5>help</H5>
      </Account>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  display: grid;
  grid-gap: 1rem;
  /* align-items: center; */
  justify-content: center;
  grid-template-columns: 1fr;
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 2px;
    padding-right: 2px;
  }
`;
const Info = styled.div`
  /* background-color:red; */
`;
const Service = styled.div``;
const Account = styled.div``;

const Label = styled.label`
  font-family: cursive;
  font-size: 20px;
  font-weight: bold;
`;
const H5 = styled.h5`
  font-family: cursive;
  background: linear-gradient(
    121.57deg,
    #ffffff 10%,
    rgba(255, 255, 255, 0.66) 30.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
