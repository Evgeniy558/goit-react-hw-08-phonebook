import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "../auth/operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      if (action.payload) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    },
    [logIn.rejected](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefresh = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [refreshUser.rejected](state) {
      state.isRefresh = false;
    },
  },
});
export const authReducer = authSlice.reducer;
