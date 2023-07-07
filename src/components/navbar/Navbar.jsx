import React, { useEffect } from "react";
import Switch from "./Switch";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-bg mb-4 mt-2 w-75 m-auto rounded-5">
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
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a class="nav-link" href="/quiz">
                Quiz
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link disabled position-relative" href="#">
                Analysis
                <span class="badge bg-warning ms-1 text-dark p-1">Pro</span>
              </a>
            </li>*/}
            <li class="nav-item me-4">
              <a class="nav-link disabled position-relative" href="#">
                Courses
                <span class="badge bg-warning ms-1 text-dark p-1 badge-color">
                  Pro
                </span>
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Switch />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
