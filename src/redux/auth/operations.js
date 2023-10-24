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
      console.log(responce.data);
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.massege);
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
