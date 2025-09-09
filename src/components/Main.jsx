import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Technologies from "./Technologies";

function Main() {
  return (
    <>
      <main className="main">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Main;
