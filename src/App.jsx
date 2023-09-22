import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Charts from "./components/Charts";
import Team from "./components/Team";
import Buy from "./components/Buy";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Charts />
      <Team />
      <Buy />
      <Footer />
    </div>
  );
};

export default App;
