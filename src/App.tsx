import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Counter from "./state/Counter"
import Status from "./components/Status";
import LoggedIn from "./state/LoggedIn";
import User from "./state/User";
import {ThemeContextProvider} from './context/ThemeContext';
import Box from './context/Box';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
