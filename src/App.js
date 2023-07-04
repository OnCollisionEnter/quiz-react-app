import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduce from "./pages/introduce/Introduce";
import Quiz from "./pages/quiz/Quiz";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/navbar/Banner";
import { useTheme } from "./context/ThemeContext";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import HomePage from "./pages/homepage/HomePage";
// import QuestionSolutionPage from "./components/Questions/QuestionSolutionPage";

function App() {
  const { theme } = useTheme();
  return (
    <div id={theme}>
      <Banner />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" />
          <Route exact path="/quiz" element={<Introduce />} />
          <Route exact path="/quiz/:collection" element={<Quiz />} />
          {/* <Route
            exact
            path="/question/:id"
            element={<QuestionSolutionPage />}
          /> */}
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
