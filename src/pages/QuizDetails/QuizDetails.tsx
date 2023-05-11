import React from "react";
import { useAppSelector } from "../../features/store";
import { VscDebugBreakpointData } from "react-icons/vsc";
import StartTest from "../../components/StartTest/StartTest";
const QuizDetails = () => {
  const { quizDetails } = useAppSelector((state) => state.quiz);
  console.log(quizDetails);
  return (
    <div className="bg-[#f3d250] py-4 px-6 overflow-auto h-[100vh]">
      <p className="text-white font-bold text-3xl">
        Title Modern and Minimalist
      </p>
      <p className="text-lg text-gray-900 py-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <p className="text-white font-semibold text-2xl ">Topics</p>
      <div>
        <div className="flex gap-1  items-center">
          <VscDebugBreakpointData />{" "}
          <p className="text-lg text-gray-900">A range of blues</p>
        </div>
        <div className="flex gap-1  items-center">
          <VscDebugBreakpointData />{" "}
          <p className="text-lg text-gray-900">A range of blues</p>
        </div>
        <div className="flex gap-1  items-center">
          <VscDebugBreakpointData />{" "}
          <p className="text-lg text-gray-900">A range of blues</p>
        </div>
        <div className="flex gap-1  items-center">
          <VscDebugBreakpointData />{" "}
          <p className="text-lg text-gray-900">A range of blues</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-white text-lg font-semibold rounded bg-[#5da2d5] px-6 py-2"> Take the test</button>
      </div>
      <StartTest/>
    </div>
  );
};

export default QuizDetails;
