import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Status from "./components/Status";
import LoggedIn from "./state/LoggedIn";
import User from "./state/User";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {/* <LoggedIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
      <User />
    </div>
  );
}

export default App;
