import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
  return (
    <div>
      {/* <div className="container w-50 mb-5 p-5 rounded-5 d-flex shadow-lg quiz-container">
        <h3>
          Please navigate to the quiz page or simply click
          <span>&nbsp;</span>
          <Link to="/quiz">here</Link>.
        </h3>
      </div> */}

      <div>
        <div class="container w-75 w-md-50 mb-4 p-5 rounded-5 shadow-lg quiz-container">
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <h1>Hoşgeldin, Okan.</h1>
              <h3>
                Teslim edilecek <strong>3</strong> ödevin var!
              </h3>

              <div class="card card-video mt-3 ">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <div class="card-img-container">
                      <img
                        src="teacher1.jpg"
                        class="card-img"
                        alt="Teacher 1"
                      ></img>
                      <i class="fas fa-play play-icon"></i>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">İzlemeye devam et</h5>
                      <p class="card-text">Past Tense</p>
                    </div>
                  </div>
                </div>
                <div class="progress-bar ">
                  <div class="progress "></div>
                </div>
              </div>
            </div>
            {/* //grid splitter */}
            <div class="col-lg-1 mb-4 col-md-12"></div>
            {/* //taskcard */}
            <div class="col-lg-7 col-md-12 ">
              <div class="row">
                <div class="card task-card rounded-3 p-3">
                  <div class="card-body">
                    <h3 class="card-title">Ünite Testi</h3>
                    <p class="card-text text-large">
                      <h4>Konu: Present Continuous </h4>
                      Eğitmen: Ali Haydar
                      <br />
                      Ödev: 20 Test Sorusu <br /> Son <strong>
                        18
                      </strong> Saat <strong>21</strong> Dakika Kaldı!
                    </p>
                  </div>
                  <Link to="/quiz" className="TaskButton mb-1">
                    Hemen Tamamla
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container w-75 mb-5 p-5 rounded-5 shadow-lg quiz-container">
        <h2>Kelime dağarcığını genişlet!</h2>
        <br />
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card card-purple">
              <div class="card-body">
                <h5 class="card-title">Selamlaşma</h5>
                <p class="card-text">12 Kelime</p>
              </div>
              <div className="card-header3 rounded-bottom-2"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card card-purple">
              <div class="card-body">
                <h5 class="card-title">Basit Fiiller</h5>
                <p class="card-text">10 Kelime</p>
              </div>
              <div className="card-header2 rounded-bottom-2"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card card-purple">
              <div class="card-body ">
                <h5 class="card-title">Alışkanlıklar</h5>
                <p class="card-text">7 Kelime</p>
              </div>
              <div className="card-header3 rounded-bottom-2"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card card-purple">
              <div class="card-body">
                <h5 class="card-title">Dış Görünüm</h5>
                <p class="card-text">10 Kelime</p>
              </div>
              <div className="card-header2 rounded-bottom-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
