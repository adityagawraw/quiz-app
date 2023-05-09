import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Question {
  question: string;
  options: Array<string>;
}
export interface QuizDetails {
  name: string;
  discription: string;
  time: number;
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
    time: 10,
    topics: [],
    count:1
  },
  questions: [
    { question: "asdasd", options: ["asd", "asda", "asda", "sdasd"] },
  ],
  answers: [1, 2, 3, 4],
  response: [2, 3, 4, 4],
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
