import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Counter from "./state/Counter"
import CounterClass from "./class/Counter"
import Status from "./components/Status";
import LoggedIn from "./state/LoggedIn";
import User from "./state/User";
import {ThemeContextProvider} from './context/ThemeContext';
import Box from './context/Box';
import Private from "./auth/Private";
import { Profile } from "./auth/Profile";
import { Routes, Route, useLocation } from "react-router-dom";
import List from "./generics/List";
function App() {

  return (
    <div className="App">
      <List 
        items={['andro', 'jean', 'john', 'maze']}
        onClick={(item) => console.log(item)}
      />

      <List 
        items={[1,2,3,4,5]}
        onClick={(item) => console.log(item)}
      />

        <List 
        items={[
          {
            id: 1,
            firstname: 'andro',
            lastname: 'eugenio'
          },
          {
            id: 2,
              firstname: 'jean',
              lastname: 'correa'
          },
          {
            id: 3,
            firstname: 'john',
            lastname: 'doe'
          }
      ]}
        onClick={(item) => console.log(item)}
      />

    </div>
  );
}

export default App;