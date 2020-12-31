import React from "react";

function About() {
  return (
    <div className="bg-light my-5">
      <div className="container text-center py-5">
        <h1 className="text-center font-weight-light">
          <span className="text-info">About</span> me
        </h1>
        <div className="lead">
          I can develop the front and the back of an app
        </div>
        <div className="row">
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What I can do?</h5>
            <p className="text-justify">
              I can build websites as I built this one. I am acquainted with
              NodeJS and Javascript. Additionaly, I have some knowledge about
              cyber security. I also enjoy building APIs for various projects.
              In all, I am largely interested in backend development.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What am I doing currently?</h5>
            <p className="text-justify">
              I'm working in backend development for Library Management System
              for our University. We are currently building the backend which
              includes building APIs and modules (using MongoDB). Currently, I
              am in my 3rd year of Raksha Shakti University. I am doing my major
              in Computer Science with Specializations in Cyber Security.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What do I believe in?</h5>
            <p className="text-justify">
              I believe in building products which customers find very
              relateable and useful in their life.I also greatly believe in
              teamwork.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>How I can help you?</h5>
            <p className="text-justify">
              I'm somewhat acquainted with frontend and backend. As I am a
              continous learner, I am still learning how to build a efficient
              website and a product. Please contact me via email
              (shivam.pandya9@gmail.com). I'll be always ready to contribute
              towards a building a meaningful product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
