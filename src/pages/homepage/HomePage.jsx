import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container w-50 mb-5 p-5 rounded-5 d-flex shadow-lg quiz-container">
      <h3>
        Please navigate to the quiz page or simply click
        <span>&nbsp;</span>
        <Link to="/quiz">here</Link>.
      </h3>
    </div>
  );
};

export default HomePage;
