import React, { useState, useEffect } from "react";

import { useAppDisptach, useAppSelector } from "../../features/store";
import Quiz from "./components/Quiz/Quiz";

const Home = () => {
  return (
    <div className="bg-white h-[100vh] py-4">
      <Quiz />
    </div>
  );
};

export default Home;


