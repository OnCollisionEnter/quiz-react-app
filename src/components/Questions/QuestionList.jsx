import React from "react";
import { connect } from "react-redux";

export const QuestionList = (props) => {
  // console.log(props);
  return (
    <div className="white">
      Debug <br />
      There are {props.quizQuestions.length} quizQuestions <br />{" "}
      quizgame/Quiz.jsx uses connect(mapStateToProps)
    </div>
  );
};

export const QuestionBank = (props) => {
  return props.quizQuestions;
};

const mapStateToProps = (state) => {
  return {
    //quizQuestions yerine başka isim de verebiliriz)
    quizQuestions: state,
  };
};

export default connect(mapStateToProps)(QuestionList);
