import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

/**
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
*/




import Navbar from "./components/Navbar/Navbar";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./Pages/Courses";
import CV from "./Pages/CV";
import Articles from "./Pages/Articles";
import CourseDetail from "./components/Course/CourseDetail";
import Footer from "./components/Footer";


function App() {

  
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );


}

const Home = () => {
  return (
    <div className="App">
      This is my home page
      <Footer/>
    </div>
  );
};

export default App;