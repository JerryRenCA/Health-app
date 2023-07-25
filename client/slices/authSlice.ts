import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { T_User } from "../data/data";
import { RootState } from "../store";
import { img_user_1 } from "../assets";

export interface AuthState {
  isLogin: boolean;
  user: T_User | null;
}

const initialState: AuthState = {
  isLogin: false,
  user: null,
};

export type T_AuthLoginPayload = {
  userName: string;
  password: string;
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<T_AuthLoginPayload>) => {
      return {
        isLogin: true,
        user: {
          id: "1",
          name: action.payload.userName,
          image: img_user_1,
        },
      };
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLogin = (state: RootState) => state.auth.isLogin;
// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;

export default authSlice.reducer;
