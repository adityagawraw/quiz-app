import React from "react";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const StartTest = () => {
  return (
    <div className="bg-white w-[400px] rounded px-6 py-4">
      <p className="text-3xl font-semibold">Quiz Rules </p>
      <div className="text-lg font-semibold">
        <div className="flex items-center gap-2 my-3">
          <FiClock className="w-7 h-7" /> <p> 10 Mins</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FiClock className="w-7 h-7" /> <p> 15 Questions</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FiClock className="w-7 h-7" /> <p> 50% passing</p>
        </div>
      </div>

      <p className="text-center text-gray-700">
        When ready click on Start Test
      </p>
      <div className="flex justify-center mt-3">
        <Link to={'/test'}>
       
        <button className="rounded bg-[#5da2d5] text-white px-2 py-1 text-lg">
          Start Test
        </button>
        </Link>
      </div>
    </div>
  );
};

export default StartTest;
