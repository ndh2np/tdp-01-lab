import logo from "./logo.svg";
import "./App.css";

import Greeting from "./Greeting";

function App() {
  return (
    <div className="App">
      <Greeting name="UOBxTDP" />
      <Greeting name="Kevin" />
      <Greeting name="Sabrina" />
      <Greeting name="Yuxuan" />
      <Greeting name="Wei Zhe" />
      <Greeting name="Bryan" />
      <Greeting name="Kheng Liang" />
      <Greeting name="Tong Yan" />
      <h5>{new Date().toString()}</h5>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Class!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
