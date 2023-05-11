import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../features/store";
import { Question, ResponseArray,QuizDetails } from "../../features/quiz-slice";
import TestQuestion from "./components/TestQuestion";
import RightSection from "./components/RightSection";
const Test = () => {
  const { questions, response, quizDetails } = useAppSelector((state) => state.quiz);
  const [questionArr, setQuestionArr] = useState<Question[]>(questions);
  const [responseArr, setResponseArr] = useState<ResponseArray>(response);
 
 
  console.log(questionArr, responseArr, quizDetails);
  return (
    <div className="bg-[#f5e6cc] h-[100vh] overflow-auto flex flex-col justify-center items-center">
      <p className="text-3xl font-semibold my-2"> {quizDetails.name}</p>
      <TestQuestion />
      <RightSection/>
    </div>
  );
};

export default Test;
