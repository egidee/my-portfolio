import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <About />
    </div>
  );
};

export default App;
