import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import Greeting from "./Greeting";
import JapFood from "./components/JapFood";
import SimpleCounter from "./components/SimpleCounter";
import SimpleMessage from "./components/SimpleMessage";
import RandomUser from "./components/RandomUser";
import Users from "./components/Users";

function App() {
  const [count, setCount] = useState(1000);
  const [page, setPage] = useState("");

  return (
    <>
      <nav
        style={{
          backgroundColor: "#f0f0f0", // Light gray background
          padding: "15px",
          marginBottom: "20px",
        }}
      >
        <div>
          <ul
            style={{
              listStyle: "none", // Remove bullet points
              padding: 0,
              margin: 0,
              display: "flex", // Arrange list items horizontally
            }}
          >
            <li style={{ marginRight: "20px" }}>
              <a
                onClick={() => setPage("")}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  cursor: "pointer",
                }}
              >
                Home
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a
                onClick={() => setPage("JapFood")}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  cursor: "pointer",
                }}
              >
                Japanese Food
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a
                onClick={() => setPage("Greeting")}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  cursor: "pointer",
                }}
              >
                Greeting
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a
                onClick={() => setPage("Counter")}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  cursor: "pointer",
                }}
              >
                Counter
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {(() => {
        switch (page) {
          case "JapFood":
            {
              return <JapFood />;
            }
            break;

          case "Greeting":
            {
              return <Greeting name="UOBxTDP" />;
            }
            break;

          case "Counter":
            {
              return (
                <div
                  id="app-box"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <SimpleCounter count={count} setCount={setCount} />
                  <SimpleMessage count={count} />
                </div>
              );
            }
            break;

          default:
            {
              return (
                <>
                  <Users />
                  <RandomUser />
                </>
              );
            }
            break;
        }
      })()}
    </>
  );
}

export default App;
