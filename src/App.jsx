import React from "react";
import { store } from "./main";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="counter">{store.getState()}</div>
      <button onClick={() => store.dispatch({ type: "LISÄÄ" })}>lisää</button>
      <button onClick={() => store.dispatch({ type: "VÄHENNÄ" })}>
        vähennä
      </button>
      <button onClick={() => store.dispatch({ type: "NOLLAA" })}>nollaa</button>
    </div>
  );
};

export default App;
