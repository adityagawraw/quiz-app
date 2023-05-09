import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuizDetails from "./pages/QuizDetails/QuizDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path={'/'} element={<Home/>}/>
        <Route  path={'/quiz-details'} element={<QuizDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
