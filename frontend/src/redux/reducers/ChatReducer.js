import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    chat: null,
    currentChat: null,
    loading: false,
    error: null,
  },
  reducers: {
    getChatsRequest: (state) => {
      state.loading = true;
    },
    getChatsSuccess: (state, action) => {
      state.chats = action.payload;
    },
    getChatsFailure: (state, action) => {
      state.error = action.payload;
    },
    getCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
    clearCurrentChat: (state) => {
      state.currentChat = null;
    },
    clearChats: (state) => {
      state.chats = [];
    },
  },
});

const { actions, reducer } = chatSlice;
export const {
  getChatsRequest,
  getChatsSuccess,
  getChatsFailure,
  getCurrentChat,
  clearCurrentChat,
  clearChats,
} = actions;
export default reducer;
