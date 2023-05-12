import React, { useEffect, useState } from "react";
import { ResponseArray, Question } from "../../../features/quiz-slice";
import { FaCheck } from "react-icons/fa";

interface Props {
  responseArr: ResponseArray;
  questionArr: Question[];
  setResponseArr: (
    value: ResponseArray | ((prevValue: ResponseArray) => ResponseArray)
  ) => void;
  currentQuest: number;
  setCurrentQuest: (value: number) => void;
}

const TestQuestion = ({
  responseArr,
  questionArr,
  setResponseArr,
  currentQuest,
  setCurrentQuest,
}: Props) => {


  return (
    <div className="bg-white rounded px-5 py-2 min-h-[400px] ">
      <p className="text-xl mt-3">
        {currentQuest + 1}. {questionArr[currentQuest].question}
      </p>
      <div className="text-xl mt-3">
        {questionArr[currentQuest].options?.map(
          (element: string, index: number) => (
            <button
              onClick={() => {
                setResponseArr((prev) => {
                  var arr = [...prev];
                  arr[currentQuest]== index + 1
                    ? (arr[currentQuest] = -1)
                    : (arr[currentQuest] =index + 1 );
                  return [ ...arr];
                });
              }}
              className="flex items-center gap-2"
            >
              <div className=" border border-gray-800 rounded">
                <FaCheck className={`m-1 w-3 h-3 ${responseArr[currentQuest] !== index+1 && "text-white"}`} />
              </div>
              <p>{questionArr[currentQuest].options[index]} </p>
            </button>
          )
        )}
      </div>
      <div className="flex justify-between mt-2">
        <button
          onClick={() => {
            currentQuest > 0 && setCurrentQuest(currentQuest - 1);
          }}
          className="rounded bg-[#5da2d5] text-white px-2 py-1 text-lg"
        >
          Previous Question
        </button>

        <button
          onClick={() => {
            currentQuest < questionArr?.length - 1 &&
              setCurrentQuest(currentQuest + 1);
          }}
          className="rounded bg-[#5da2d5] text-white px-2 py-1 text-lg"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default TestQuestion;
