import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    chat: null,
    currentChat: null,
    openChat: false,
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
    setOpenChat: (state) => {
      state.openChat = !state.openChat;
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
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
  setOpenChat,
  clearCurrentChat,
  clearChats,
} = actions;
export default reducer;
