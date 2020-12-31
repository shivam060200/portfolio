import React from "react";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./Title";
import About from "./About";

function HomePage() {
  return (
    <div>
      <Title
        name="YOUR NAME"
        leadText="I am a student and developer from India"
      />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <About />
    </div>
  );
}

export default HomePage;
