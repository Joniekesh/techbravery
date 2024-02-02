import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
    message: null,
    loading: false,
    error: null,
  },
  reducers: {
    getMessagesRequest: (state) => {
      state.loading = true;
    },
    getMessagesSuccess: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
    },
    getMessagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createMessageRequest: (state) => {
      state.loading = true;
    },
    createMessageSuccess: (state, action) => {
      state.loading = false;
      state.messages.push(action.payload);
    },
    createMessageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearMessages: (state) => {
      state.messages = [];
      state.message = null;
    },
  },
});

const { actions, reducer } = messageSlice;
export const {
  getMessagesRequest,
  getMessagesSuccess,
  getMessagesFailure,
  createMessageRequest,
  createMessageSuccess,
  createMessageFailure,
  clearMessages,
} = actions;
export default reducer;
