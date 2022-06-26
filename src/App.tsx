import React, { useEffect, useState } from "react";
import "./App.css";
import CustomButton from "./html/Button";
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
import Toast from "./templateliterals/Toast";
import CustomComponent from "./html/CustomComponent";
import Text from "./polymorphic/Text";
function App() {
  return (
    <div className="App">
     <Text size="sm" color="primary" as='h1' > Heading </Text>
     <Text size="md" color="secondary" as="p"> paragraph </Text>
     <Text size="lg" as="label" htmlFor="someid" > label </Text>
    </div>
  );
}

export default App;
