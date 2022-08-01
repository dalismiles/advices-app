import React from "react";
import AdviceCardState from "./components/AdviceCardState/AdviceCardState";
import AdviceCardReducer from "./components/AdviceCardReducer/AdviceCardReducer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__usestate">
        <h1>Hook: useState</h1>
        <AdviceCardState />
      </div>

      <div className="App__usereducer">
        <h1>Hook: useReducer</h1>
        <AdviceCardReducer />
      </div>
    </div>
  );
}

export default App;
