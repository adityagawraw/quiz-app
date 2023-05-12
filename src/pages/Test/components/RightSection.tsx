import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  QuizDetails,
  ResponseArray,
  Timer,
  quizResponse,
} from "../../../features/quiz-slice";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useAppDisptach } from "../../../features/store";
import { FaCheck } from "react-icons/fa";

interface Props {
  responseArr: ResponseArray;
  time: number;
}

const RightSection = ({ responseArr, time }: Props) => {
  const [timer, setTimer] = useState<number>(time);

  const naviagate = useNavigate();
  const dispatch = useAppDisptach();
  useEffect(() => {
    if (timer === 0) {
      // naviagate("/result");
      return;
    }
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  }, [timer]);

  return (
    <div>
      <p>
        Time Left: {Math.floor(timer / 3600)}h :{" "}
        {Math.floor((timer % 3600) / 60)}m : {(timer % 3600) % 60}s
      </p>
      {/* {responseArr?.map((element: number, index: number) => (
        <div className=" border border-gray-800 rounded w-4 h-4">
          <FaCheck
            className={`m-1 w-3 h-3 ${
              responseArr[index] == -1 && "text-white"
            }`}
          />
        </div>
      ))} */}
    </div>
  );
};

export default RightSection;
