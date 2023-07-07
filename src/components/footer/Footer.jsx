import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="w-100 custom-footer">
      <div className="container w-75 m-auto ">
        <div className="row">
          <div className="col text-start">webdev-kemal/react-quiz-app/</div>
          <div className="col text-center">Made with ❤️ by mkod.</div>
          <div className="col text-end">
            <a href="https://www.instagram.com/dev.kemal/" target="_blank">
              instagram
            </a>{" "}
            |{" "}
            <a href="https://github.com/webdev-kemal" target="_blank">
              github
            </a>{" "}
            | linkedin{" "}
          </div>
        </div>
        {/* <div className="row">
          <div className="col text-start">One of three columns</div>
          <div className="col text-center">One of three columns</div>
          <div className="col text-end">One of three columns</div>
        </div>
        <div className="row">
          <div className="col text-start">One of three columns</div>
          <div className="col text-center">One of three columns</div>
          <div className="col text-end">One of three columns</div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
