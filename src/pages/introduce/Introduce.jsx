import React, { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import "./Introduce.css";
import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const collections = [
    "Past Tense Testi",
    "Zaman Zarfları",
    "Preposition Testi",
  ];
  const [collectionChange, setCollectionChange] = useState("Bir Ödev Seçin");
  const navigate = useNavigate();
  // const TOTAL_QUESTIONS = 10;

  const startQuiz = () => {
    if (collectionChange !== "Bir Ödev Seçin")
      navigate(`/quiz/${collectionChange}`);
  };

  return (
    <div>
      <div className="container introduce m-auto mb-4 rounded-5 w-75 p-5 shadow-lg introduce-container">
        {/* <i className="fa-brands fa-google"></i> */}
        <h1>Teslim edilecek ödevi seçin</h1>
        <Dropdown
          data={collections}
          collectionChange={collectionChange}
          setCollectionChange={setCollectionChange}
        />
        <div onClick={startQuiz} className="btn btn-md btn-success">
          Devam et
        </div>
      </div>

      <div class="container w-75 mb-5 p-5 rounded-5 shadow-lg quiz-container">
        <h2>Tekrar edebileceğiniz konular</h2>
        <br />
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card card-video mt-3 ">
              <div class="row no-gutters">
                <div class="col-md-5">
                  <div class="card-img-container">
                    <img
                      src="teacher1.jpg"
                      class="card-img"
                      alt="Teacher 1"
                    ></img>
                    <i class="fas fa-play play-icon"></i>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Zamirler</h5>
                    <p class="card-text">12 Dakika</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card card-video mt-3 ">
              <div class="row no-gutters">
                <div class="col-md-5">
                  <div class="card-img-container">
                    <img
                      src="teacher1.jpg"
                      class="card-img"
                      alt="Teacher 1"
                    ></img>
                    <i class="fas fa-play play-icon"></i>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Günlük İfadeler 1</h5>
                    <p class="card-text">7 Dakika</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card card-video mt-3 ">
              <div class="row no-gutters">
                <div class="col-md-5">
                  <div class="card-img-container">
                    <img
                      src="teacher1.jpg"
                      class="card-img"
                      alt="Teacher 1"
                    ></img>
                    <i class="fas fa-play play-icon"></i>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">Continuous Tense</h5>
                    <p class="card-text">10 Dakika</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card card-video mt-3 ">
              <div class="row no-gutters">
                <div class="col-md-5">
                  <div class="card-img-container">
                    <img
                      src="teacher1.jpg"
                      class="card-img"
                      alt="Teacher 1"
                    ></img>
                    <i class="fas fa-play play-icon"></i>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">İlk Cümleni Kur!</h5>
                    <p class="card-text">5 Dakika</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
