import React, { useState } from "react";
import "./Quiz.css";
import { useParams } from "react-router-dom";
import MainMenu from "../../components/quizgame/MainMenu";
import EndScreen from "../../components/quizgame/EndScreen";
import QuizGame from "../../components/quizgame/Quiz";
import { QuizContext } from "../../context/QuizContext";
// import QuestionList from "../../components/Questions/QuestionList";

const Quiz = () => {
  const { collection } = useParams();
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div>
      <div className="container w-50 mb-5 rounded-5 d-flex shadow-lg quiz-container">
        <div className="quiz text-center">
          <strong>Selected:</strong> {collection}
          <QuizContext.Provider
            value={{ gameState, setGameState, score, setScore }}
          >
            <div>{gameState === "menu" && <MainMenu />}</div>
            <div>{gameState === "quiz" && <QuizGame />}</div>
            <div>{gameState === "endScreen" && <EndScreen />}</div>
          </QuizContext.Provider>
        </div>
      </div>
      <div>{/* <QuestionList /> */}</div>
    </div>
  );
};

export default Quiz;
