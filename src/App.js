
import './App.css';

import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Products } from "./components/products";
import { Chooseus } from "./components/whychooseus";
import JsonData from "./data/data.json";


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
  
      <Header data={landingPageData.Header} />
      <Hero data={landingPageData.Hero} />
      <Products data={landingPageData.Products} />
      <Chooseus data={landingPageData.Chooseus} />

    </div>
  );
};

export default App;
