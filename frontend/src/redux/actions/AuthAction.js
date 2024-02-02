import axios from "axios";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutUser,
  registerFailure,
  registerRequest,
  registerSuccess,
} from "../reducers/AuthReducer";
import { makeRequest } from "../../utils/makeRequest";
import { toast } from "react-toastify";
import { clearMessages } from "../reducers/MessageReducer";
import { clearChats, clearCurrentChat } from "../reducers/ChatReducer";
import { getChats } from "./ChatActions";

export const login = (data) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const res = await makeRequest.post("/auth/login", data);
    if (res.status === 200) {
      dispatch(loginSuccess(res.data));
      dispatch(getChats());
      toast.success("Login succesfull", { theme: "colored" });
    }
  } catch (err) {
    dispatch(loginFailure(err.response.data));
    console.log(err);
    toast.error(err.response.data, { theme: "colored" });
  }
};

export const register = (data) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await makeRequest.post("/auth", data);
    if (res.status === 201) {
      dispatch(registerSuccess());
    }
    toast.success("Registeration succesfull", { theme: "colored" });
  } catch (err) {
    dispatch(registerFailure(err.response.data));
    console.log(err);
    toast.error(err.response.data, { theme: "colored" });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await makeRequest.post("/auth/logout");
    if (res.status === 200) {
      dispatch(logoutUser());
      dispatch(clearMessages());
      dispatch(clearCurrentChat());
      dispatch(clearChats());
      toast.success(res.data, { theme: "colored" });
    }
  } catch (err) {
    console.log(err);
    toast.error(err.response.data, { theme: "colored" });
  }
};
