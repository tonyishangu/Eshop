import React from 'react'
// import './App.css';
import styled from 'styled-components'
import Home from "./components/home/Home";
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <Div>
      <Navbar/>
      <Home/>
      <Footer/>
    </Div>
  );
}

export default App;

const Div = styled.div`
  background-color: #0f1636;
`
