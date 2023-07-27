import React from "react";
import Switch from "./Switch";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {
  const [isLargerThanMobile] = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-bg mt-3 w-75 mx-auto rounded-5">
      <div class="container-fluid custom-navbar">
        <a class="navbar-brand" href="/">
          <span class="spans">&#123;</span>
          reactQuizApp
          <span class="spans">&#125;</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-4">
              <a
                class="nav-link navlink-hover active"
                aria-current="page"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item me-4">
              <a
                class="nav-link navlink-hover"
                onClick={() => navigate("/quiz")}
              >
                Quiz
              </a>
            </li>
            <li className="nav-item me-4">
              <a
                class="nav-link navlink-hover"
                onClick={() => navigate("/courses")}
              >
                Courses
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link disabled position-relative" href="#">
                Analysis
                <span class="badge bg-warning ms-1 text-dark p-1">Pro</span>
              </a>
            </li>*/}
            <li class="nav-item me-4">
              <a
                class="nav-link navlink-hover position-relative"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
                <span class="badge bg-warning ms-1 text-dark p-1 badge-color">
                  Pro
                </span>
              </a>
            </li>
            <li class="nav-item  me-5">
              <a
                class="nav-link navlink-hover"
                onClick={() => navigate("/login")}
              >
                Login
              </a>
            </li>
            {isLargerThanMobile ? (
              <li class="nav-item">
                <a class="nav-link " href="#">
                  <Switch />
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
