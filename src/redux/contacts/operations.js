import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://6527b607931d71583df13aa7.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get("/contacts");
      console.log("fetchContacts", responce.data);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const responce = await axios.post("/contacts", { name, number });
      console.log("add contact", responce.data);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${id}`);
      console.log("delete", responce.data);
      return responce.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
