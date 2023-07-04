import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduce from "./pages/introduce/Introduce";
import Quiz from "./pages/quiz/Quiz";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/navbar/Banner";
import QuestionList from "./components/Questions/QuestionList";
import { useTheme } from "./context/ThemeContext";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const { theme } = useTheme();
  return (
    <div id={theme}>
      <Banner />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/login" element={<Introduce />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/:collection" element={<Quiz />} />
        </Routes>
      </Router>
      <QuestionList />
      <Footer />
    </div>
  );
}

export default App;
