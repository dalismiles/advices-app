import React from "react";
import { useReducer } from "react";
import "./index.css";
import data from "../../commons/data";
import Button from "../Button";

const AdviceCardReducer = () => {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "previous":
        return { count: state.count - 1 };
      case "next":
        return { count: state.count + 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  let advice = data[state.count];

  return (
    <div className="AdviceCardReducer__content">
      <h2>"{advice.advice}"</h2>
      <p>Post Number: #{advice.id}</p>

      <Button
        disabled={state.count < 1}
        onClick={() => dispatch({ type: "previous" })}
        buttonTextContent="Prev!"
        type="button"
      />
      <Button
        disabled={state.count >= data.length - 1}
        onClick={() => dispatch({ type: "next" })}
        buttonTextContent="Next!"
        type="button"
      />
    </div>
  );
};

export default AdviceCardReducer;
