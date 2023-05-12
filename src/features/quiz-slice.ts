import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Question {
  question: string;
  options: Array<string>;
}
export interface Timer {
  hours: number;
  min: number;
  sec: number;
}
export interface QuizDetails {
  name: string;
  discription: string;
  time: Timer;
  topics: Array<string>;
  count: number;
}
export type QuestionsArray = Array<Question>;

export type AnswersArray = Array<number>;

export type ResponseArray = Array<number>;

export interface QuizSliceState {
  quizDetails: QuizDetails;
  questions: QuestionsArray;
  answers: AnswersArray;
  response: ResponseArray;
}

const initialState: QuizSliceState = {
  quizDetails: {
    name: "lormasda ada asdasd asd",
    discription:
      "Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications.",
    time: {
      hours: 0,
      min: 2,
      sec: 10,
    },
    topics: [],
    count: 1,
  },
  questions: [
    {
      question: "Divide the total seconds by 60 to convert it to minutes?",
      options: ["asd", "asda", "asda", "sdasd"],
    },
    {
      question: " Apply the Math.floor() method to minutes to round down it.",
      options: ["asd", "asda", "asda", "sdasd"],
    },
    {
      question:
        "Take modulo of total seconds by 60 to get the remaining seconds.",
      options: ["asd", "asda", "asda", "sdasd"],
    },
    {
      question: "If minutes or seconds are less than 10, append 0 before them.",
      options: ["asd", "asda", "asda", "sdasd"],
    },
  ],
  answers: [1, 2, 3, 0],
  response: [-1, -1, -1, -1],
};

const quizSlice = createSlice({
  name: "questions",
  initialState: initialState,
  reducers: {
    quizQuestionsAndAnswers: (state, action: PayloadAction<any>) => {
      state.quizDetails = action.payload.quizDetails;
      state.questions = action.payload.questions;
      state.answers = action.payload.answers;
    },
    quizResponse: (state, action: PayloadAction<any>) => {
      state.response = action.payload;
    },
  },
});

export const { quizResponse, quizQuestionsAndAnswers } = quizSlice.actions;
export default quizSlice.reducer;
