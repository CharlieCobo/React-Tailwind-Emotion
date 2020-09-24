import React from "react";
import { PStyled } from "./components/Text";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PStyled>
          Hello, i'm using tailwind with macro and emotion/styled
        </PStyled>
        <Button onClick={() => alert("I'm a simple button")}>Simple</Button>
        <Button rounded isPrimary onClick={() => alert("I'm a custom button")}>
          Custom
        </Button>
      </header>
    </div>
  );
}

export default App;
