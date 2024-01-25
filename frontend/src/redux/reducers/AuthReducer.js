import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

const { actions, reducer } = authSlice;
export const { loginRequest, loginSuccess, loginFailure, logoutUser } = actions;
export default reducer;
