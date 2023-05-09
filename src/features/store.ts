import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quiz-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "./user-Slice";

const rootReducer = combineReducers({
  quiz: quizSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDisptach: () => AppDispatch = useDispatch;

export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export default store;
