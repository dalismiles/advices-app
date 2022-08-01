import React from "react";
import { useState } from "react";
import "./index.css";
import data from "../../commons/data";
import Button from "../Button";

const AdviceCardState = () => {
  const [count, setCount] = useState(0);

  let advice = data[count];

  const prev = () => {
    setCount(count - 1);
  };
  const next = () => {
    setCount(count + 1);
  };

  return (
    <div className="AdviceCardState__content">
      <h2>"{advice.advice}"</h2>
      <p>Post Number: #{advice.id}</p>

      <Button
        disabled={advice.id < 1}
        onClick={prev}
        buttonTextContent="Prev!"
        type="button"
      />
      <Button
        disabled={advice.id >= data.length - 1}
        onClick={next}
        buttonTextContent="Next!"
        type="button"
      />
    </div>
  );
};

export default AdviceCardState;
