import React, { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import "./Introduce.css";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const collections = ["react easy", "react hard", "nextjs"];
  const [collectionChange, setCollectionChange] = useState(
    "choose a collection"
  );
  const navigate = useNavigate();
  // const TOTAL_QUESTIONS = 10;

  const startQuiz = () => {
    if (collectionChange !== "choose a collection")
      navigate(`/quiz/${collectionChange}`);
  };

  return (
    <div className="container introduce m-auto mb-5 mt-2 rounded-5 w-50 shadow-lg introduce-container">
      {/* <i className="fa-brands fa-google"></i> */}
      <h1>choose a set to make a test</h1>
      <Dropdown
        data={collections}
        collectionChange={collectionChange}
        setCollectionChange={setCollectionChange}
      />
      <div onClick={startQuiz} className="btn btn-md btn-success">
        Continue
      </div>
    </div>
  );
};

export default Introduce;
