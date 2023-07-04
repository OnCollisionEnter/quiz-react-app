import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="w-100 custom-footer">
      <div className="container w-50 m-auto">
        <div className="row mt-4">
          <div className="col text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="col text-center">Made with ❤️ by me.</div>
          <div className="col text-end">
            <a href="https://www.instagram.com/dev.kemal/" target="_blank">
              instagram
            </a>{" "}
            | github | linkedin{" "}
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
    </div>
  );
};

export default Footer;
