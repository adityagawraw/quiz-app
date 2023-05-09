import React from "react";
import QuizCards from "./QuizCard";

const Quiz = () => {
  return (
    <div className="bg-[#3feee6] mx-4 my-2 p-2 shadow-lg rounded-lg ">
      <p className="text-4xl font-bold text-white pb-4">Quizes</p>
      <div className="flex gap-2 flex-wrap justify-around">
        <QuizCards />
        <QuizCards />
        <QuizCards />
        <QuizCards />
      </div>
    </div>
  );
};

export default Quiz;
