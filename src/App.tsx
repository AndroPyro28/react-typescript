import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

function App() {


  return (
    <div className="App">
      <Container styles={{border:'solid 1px black', padding: '1rem'}} />
    </div>
  );
}

export default App;
