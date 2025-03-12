import React, { useState } from "react";
import AppHeader from "./Components/AppHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import AppFooter from "./Components/AppFooter";
import MovieContainer from "./Components/MovieContainer";
import SeeMore from "./Components/SeeMore";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/search/:query/:value" element={<MovieContainer />} />
          <Route path="/search/:query/:value/:imdbID" element={<SeeMore/>}/>
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
