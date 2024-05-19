import React from "react";
import {
  Hero,
  Companies,
  Courses,
  Achievement,
  Schools,
  Feedback,
  CTA,
  Footer,
} from "./components";
import "./App.css";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <Schools />
      <Companies />
      <CTA />
      <Achievement />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
