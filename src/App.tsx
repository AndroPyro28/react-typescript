import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Counter from "./state/Counter";
import CounterClass from "./class/Counter";
import Status from "./components/Status";
import LoggedIn from "./state/LoggedIn";
import User from "./state/User";
import { ThemeContextProvider } from "./context/ThemeContext";
import Box from "./context/Box";
import Private from "./auth/Private";
import { Profile } from "./auth/Profile";
import { Routes, Route, useLocation } from "react-router-dom";
import List from "./generics/List";
import RandomNumber from "./restriction/RandomNumber";
function App() {
  return (
    <div className="App">
      <RandomNumber value={-1} isNegative />
      <RandomNumber value={0} isZero />
      <RandomNumber value={1} isPositive />
    </div>
  );
}

export default App;
