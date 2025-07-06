import { createSlice } from "@reduxjs/toolkit";

const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    currentMenu: {
      id: 1,
      name: "Dashboard",
      url: "/admin",
    },
  },
  reducers: {
    setCurrentMenu: (state, action) => {
      state.currentMenu = action.payload;
    },
  },
});

const { actions, reducer } = utilsSlice;
export const { setCurrentMenu } = actions;
export default reducer;
