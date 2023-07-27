import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduce from "./pages/introduce/Introduce";
import Quiz from "./pages/quiz/Quiz";
import "./App.css";

import Banner from "./components/navbar/Banner";
import { useTheme } from "./context/ThemeContext";
import Footer from "./components/footer/Footer";

import HomePage from "./pages/homepage/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Alert from "./components/alert/Alert";
// import { ChakraProvider } from "@chakra-ui/react";

// import QuestionSolutionPage from "./components/Questions/QuestionSolutionPage";

function App() {
  const { theme } = useTheme();
  return (
    <div id={theme}>
      <Banner />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/quiz" element={<Introduce />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/quiz/:collection" element={<Quiz />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route
            exact
            path="/question/:id"
            element={<QuestionSolutionPage />}
          /> */}
        </Routes>
      </Router>

      <Alert />
      <Footer />
    </div>
  );
}

export default App;
