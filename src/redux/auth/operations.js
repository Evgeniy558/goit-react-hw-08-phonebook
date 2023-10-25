import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post("/users/signup", credentials);
      console.log(responce.data);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.massege);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkAPI) => {
    try {
      const responce = await axios.post("/users/login", credentials);
      console.log("logIn", responce.data);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      alert("Incorrect password or email address. Please try again.");
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (token, thunkAPI) => {
    try {
      const responce = await axios.post("users/logout", token);
      console.log("logout", responce.data);
      clearAuthHeader();
    } catch (error) {
      thunkAPI.rejectWithValue(error.massege);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      // Reading the token from the state via getState()
      // const state = thunkAPI.getState();
      const persistedToken = thunkAPI.getState().auth.token;
      if (persistedToken === null) {
        // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue("Unable to fetch user");
      }
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const responce = await axios.get("users/current");
      console.log("refresh", responce.data);
      return responce.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.massege);
    }
  }
);
