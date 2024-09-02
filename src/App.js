import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

//import Greeting from "./Greeting";
//import JapFood from "./components/JapFood";
import SimpleCounter from "./components/SimpleCounter";
import SimpleMessage from "./components/SimpleMessage";
import RandomUser from "./components/RandomUser";
import Users from "./components/Users";

function App() {
  const [count, setCount] = useState(1000);
  return (
    <>
      <Users />
      <RandomUser />
      <div id="app-box" style={{ display: "flex", flexDirection: "row" }}>
        <SimpleCounter count={count} setCount={setCount} />
        <SimpleMessage count={count} />
      </div>
    </>
  );
}

export default App;
