import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "LISÄÄ":
      return state + 1;
    case "VÄHENNÄ":
      return state - 1;
    case "NOLLAA":
      return 0;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
