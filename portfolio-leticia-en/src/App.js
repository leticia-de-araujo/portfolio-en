import React from "react";
import TopButton from "./components/assets/TopButton";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/errors/ErrorFallback";


const App = () => {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Home />
        <Projects />
        <About />
        <Contact />
        <TopButton />
      </ErrorBoundary>
    </div>
  );
};

export default App;
