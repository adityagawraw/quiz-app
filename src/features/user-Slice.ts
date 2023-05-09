import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  isAuth: boolean;
}

const initialState: User = {
  name: "",
  email: "",
  isAuth: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
    logoutUser: (state, action: PayloadAction<any>) => {
      state = initialState;
    },
  },
});

export const { loginUser, logoutUser } = UserSlice.actions;

export default UserSlice.reducer;
