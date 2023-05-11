import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Timer } from "../../../features/quiz-slice";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const RightSection = () => {
  const [timer, setTimer] = useState<Timer>({ hours: 1, min: 2, sec: 10 });
  const naviagate = useNavigate();

  useEffect(() => {
    const time = timer.hours * 3600 + timer.min * 60 + timer.sec;
    if (time === 0) {
      naviagate("/result");
    }
    setTimeout(() => {
      // setTimer({timer.hours = });
    }, 1000);
  }, [timer]);

  return (
    <div>
      <p>Time Left</p>
      {/* <p>
        {Math.floor(time / 60)} :{" "}
        {time % 60 < 10 ? <span>0{time % 60} </span> : <span>{time % 60}</span>}
      </p> */}
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => {
          
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;
          return ` ${minutes} mins ${seconds} sec`;
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default RightSection;
