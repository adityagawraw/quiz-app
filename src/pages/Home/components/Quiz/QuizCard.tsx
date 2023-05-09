import React from "react";
import { Link } from "react-router-dom";

const QuizCard = () => {
  return (
    <Link to='/quiz-details'>
    <div className="w-[300px] bg-white shadow-md px-4 py-3 rounded ">
      <p className="font-semibold text-lg text-gray-700">
        MySQL database using JavaScript{" "}
      </p>
      <p className="text-gray-600 my-3">
        {" "}
        You want to connect to a MySQL database using JavaScript, you can use
        Node. js and a library called mysql. You can create queries, and get
        results as an array of registers.{" "}
      </p>
      <div className="flex justify-center pt-2">
        <button className="bg-[#4ba4b0] text-white px-2 py-1 rounded ">
          Take the Test
        </button>
      </div>
    </div>
    </Link>
  );
};

export default QuizCard;
