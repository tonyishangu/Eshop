import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <ContactContainer>
            iojoipj
        </ContactContainer>
    )
}

export default Contact

const ContactContainer = styled.div`
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
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 2px;
    padding-right: 2px;
  }
`;

