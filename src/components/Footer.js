import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          <Link to="/contact">
            <button className="btn btn-outline-light btn-lg mt-3">
              Let's talk
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 py-3">
            <h5 className="text-info pb-3">More links</h5>
            <Link to="/" className="text-light d-block">
              Home
            </Link>
            <a href="/" className="text-light d-block">
              Projects
            </a>
            <Link to="/contact" className="text-light d-block">
              Contact me
            </Link>
            <Link to="/write-a-recommendation" className="text-light">
              Write a recommendation <i className="fas fa-heart text-light"></i>
            </Link>
          </div>
         
          <div className="col-12 col-md-6 py-3">
            <h5 className="text-info pb-3">Social</h5>
            <a
              href="https://www.linkedin.com/in/shivam-pandya-a931b616a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a
              href="https://github.com/shivam060200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a
              href="mailto: shivam.pandya9@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="text-muted py-3">
          <p>Copyright © Shivam Pandya 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
