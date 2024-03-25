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
// import { toast } from "react-toastify";
import { toast } from "sonner";
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
      toast.success("Login succesfull");
    }
  } catch (err) {
    dispatch(loginFailure(err.response.data));
    console.log(err);
    toast.error(err.response.data);
  }
};

export const register = (data) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const res = await makeRequest.post("/auth", data);
    if (res.status === 201) {
      dispatch(registerSuccess());
    }
    toast.success("Registeration succesfull");
  } catch (err) {
    dispatch(registerFailure(err.response.data));
    console.log(err);
    toast.error(err.response.data);
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
      // toast.success(res.data, { theme: "colored" });
    }
  } catch (err) {
    console.log(err);
    toast.error(err.response.data);
  }
};
