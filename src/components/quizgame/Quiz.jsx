import React, { useState, useContext } from "react";
import { QuizContext } from "../../context/QuizContext";
import { connect } from "react-redux";

//to add: disable other choices once we've choosen wrong answer
//to add: when we go to previous question it should still show us if our answer was correct or false
//maybe edit previous button and set isCorrect to true if isAnswered is true for that specific question?

const QuizGame = (props) => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [isFinished, setFinished] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(0);
  const questionsArray = [...props.quizQuestions];
  const [optionChosen, setOptionChosen] = useState("");
  const [isAnswered, setIsAnswered] = useState(
    Array(questionsArray.length).fill(false)
  );
  const [isCorrect, setIsCorrect] = useState(
    Array(questionsArray.length).fill("empty")
  );
  const [correctButtonClass, setCorrectButtonClass] = useState(
    Array(questionsArray.length).fill("choice")
  );
  const [disableOthers, setDisableOthers] = useState(
    Array(questionsArray.length).fill("choice")
  );
  //showSolution
  const handleChoiceClick = (choice) => {
    setOptionChosen(choice);

    if (questionsArray[currQuestion].correctAnswer === choice) {
      //check if the question was answered before
      if (!isAnswered[currQuestion]) {
        setCorrectButtonClass((prevState) => {
          const newState = [...prevState];
          newState[currQuestion] = "choice true-button";
          return newState;
        });

        setDisableOthers((prevState) => {
          const newState = [...prevState];
          newState[currQuestion] = "choice disabled-choice";
          return newState;
        });
        setIsCorrect((prevState) => {
          const newState = [...prevState];
          newState[currQuestion] = "correct";
          return newState;
        });
      }
    } else {
      setCorrectButtonClass((prevState) => {
        const newState = [...prevState];
        newState[currQuestion] = "highlighted-choice choice";
        return newState;
      });
      setDisableOthers((prevState) => {
        const newState = [...prevState];
        newState[currQuestion] = "choice false-button";
        return newState;
      });
    }
  };

  const nextQuestion = () => {
    //check we're not on last question
    if (currQuestion !== questionsArray.length - 1) {
      //check if correct
      if (questionsArray[currQuestion].correctAnswer === optionChosen) {
        //check if the question was answered before
        if (!isAnswered[currQuestion]) {
          setScore(score + 1);

          setIsAnswered((prevState) => {
            const newState = [...prevState];
            newState[currQuestion] = true;
            return newState;
          });
          setOptionChosen(
            "RESETED CHOSEN OPTION IN CASE NEXT QUESTION'S ANSWER IS THE SAME, THEREFORE USER CANT GET A FREE POINT FROM PASSING BY"
          );
        }
      }

      console.log("LMAO BOOY");
      setCurrQuestion(currQuestion + 1);
    }
    //check if we're on last question
    else if (currQuestion === questionsArray.length - 1) {
      //check if the question was answered before
      if (!isAnswered[currQuestion]) {
        //check if answered correctly
        if (questionsArray[currQuestion].correctAnswer === optionChosen) {
          setScore(score + 1);
        }
      }
      finishQuiz();
      setFinished(true);
    }
  };
  const prevQuestion = () => {
    if (currQuestion > 0) {
      setCurrQuestion(currQuestion - 1);
    } else if (currQuestion === 0) {
      return;
    }
  };
  const finishQuiz = () => {
    if (isFinished) {
      setIsCorrect(Array(questionsArray.length).fill("empty"));
      setIsAnswered(Array(questionsArray.length).fill(false));

      setGameState("endScreen");
    }
  };

  useState(console.log(optionChosen), [optionChosen]);

  return (
    <div className="container container-modified m-auto w-75">
      <div className="d-flex justify-content-between">
        <div
          onClick={prevQuestion}
          className={
            currQuestion === 0
              ? "fw-bold question-nav disabled-button "
              : "fw-bold question-nav"
          }
        >
          LAST
        </div>
        <div onClick={nextQuestion} className="fw-bold question-nav">
          {currQuestion === questionsArray.length - 1 ? "SUBMIT" : "NEXT"}
        </div>
      </div>
      <h2 className="quizGame">
        Question [{currQuestion + 1} / {questionsArray.length}]
      </h2>
      <div className="mb-3"> {questionsArray[currQuestion].question} </div>
      <div className="choices">
        {Object.entries(questionsArray[currQuestion].choices).map(
          ([choiceKey, choiceValue]) =>
            // cevap dogru mu? aşağıdaki kod : classname: disabled-choice choice
            choiceKey === questionsArray[currQuestion].correctAnswer ? (
              <div>
                <div
                  key={choiceKey}
                  className={correctButtonClass[currQuestion]}
                  onClick={() => handleChoiceClick(choiceKey)}
                >
                  {choiceValue}
                </div>
                {isCorrect[currQuestion] === "correct" && (
                  <p>CORRECT ANSWER!</p>
                )}
              </div>
            ) : (
              <div>
                <div
                  key={choiceKey}
                  className={disableOthers[currQuestion]}
                  onClick={() => handleChoiceClick(choiceKey)}
                >
                  {choiceValue}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //quizQuestions yerine başka isim de verebiliriz)
    quizQuestions: state,
  };
};

export default connect(mapStateToProps)(QuizGame);
// export default QuizGame;
//verilen şıklardan ve sorulardan yeni array oluşturulacak sadece yanlış soruların etiketlerini alıp o konularda zayıf oldugunu göste
