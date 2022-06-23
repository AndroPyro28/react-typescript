import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

function App() {


  return (
    <div className="App">
      <Input value="" handleChange={(e) => console.log('handleChange',e)} />

      <Button handleClick={(event, id) => {
        console.log('button clicked', event, id)
      }} />

      <Greet isLoggedIn={true} messageCount={10} />
    </div>
  );
}

export default App;
