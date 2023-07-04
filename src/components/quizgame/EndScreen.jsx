import React from "react";
import { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";

const EndScreen = () => {
  const { score } = useContext(QuizContext);

  return (
    <div>
      <br />
      Correct answers: <h2>{score}</h2>
    </div>
  );
};

export default EndScreen;
