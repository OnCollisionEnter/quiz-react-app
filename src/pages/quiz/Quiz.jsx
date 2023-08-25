import React, { useState } from "react";
import "./Quiz.css";
import { useParams } from "react-router-dom";
import MainMenu from "../../components/quizgame/MainMenu";
import EndScreen from "../../components/quizgame/EndScreen";
import QuizGame from "../../components/quizgame/Quiz";
import { QuizContext } from "../../context/QuizContext";
// import QuestionList from "../../components/Questions/QuestionList";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Quiz = () => {
  const { collection } = useParams();
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div>
      <div className="mh-100vh">
        <Navbar />
        <div className="container w-75 mt-4 rounded-5 p-5 d-flex shadow-lg quiz-container">
          <div className="quiz text-center">
            <h2>Quiz: {collection}</h2>
            <QuizContext.Provider
              value={{ gameState, setGameState, score, setScore }}
            >
              <div>{gameState === "menu" && <MainMenu />}</div>
              <div>{gameState === "quiz" && <QuizGame />}</div>
              <div>{gameState === "endScreen" && <EndScreen />}</div>
            </QuizContext.Provider>
          </div>
        </div>
        <div>
          {gameState === "menu" && (
            <div className="container w-75 mt-4 rounded-5 p-5 d-flex shadow-lg default-container">
              <div className="quiz text-center w-100">
                <h2>Önceki Sınav Sonuçlarınız</h2>
                <br />
                <p>Daha önceki sınavlarınız bulunmamaktadır.</p>
              </div>
            </div>
          )}
          <div className="container w-75 mt-4  p-5 d-flex shadow-lg">
            <div className="quiz text-center w-100">
              <h2>Reklam Panosu</h2>
              <br />
              <p>bu alanı sade bir reklam panosu dolduracak.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
