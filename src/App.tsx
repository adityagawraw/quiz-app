import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuizDetails from "./pages/QuizDetails/QuizDetails";
import Test from "./pages/Test/Test";
import Result from "./pages/Result/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path={'/'} element={<Home/>}/>
        <Route  path={'/quiz-details'} element={<QuizDetails/>}/>
        <Route  path={'/test'} element={<Test/>}/>
        <Route  path={'/result'} element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
