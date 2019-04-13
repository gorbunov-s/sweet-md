import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
