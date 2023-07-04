import React, { useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import "../../pages/quiz/Quiz.css";
const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className="menu ">
      <button
        className=" btn mt-3 btn-md bg-success text-white"
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Begin Test
      </button>
    </div>
  );
};

export default MainMenu;
