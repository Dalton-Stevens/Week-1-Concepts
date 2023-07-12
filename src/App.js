import "./App.css";
import Child from "./Child";
import Form from "./Form";
import { useState } from "react";

function App() {
  // const names = ["Lukas", "Cameron", "Scott"];
  const [names, setNames] = useState(["Lukas", "Cameron", "Scott"]);

  return (
    <div className="App">
      App.js
      <Child name={names[0]} />
      <Child name={names[1]} />
      <Child name={names[2]} />
      <Child name={names[3]} />
      <Child name={names[4]} />
      <Form name={names} setNames={setNames} />
    </div>
  );
}

export default App;
