import { makeRequest } from "../../utils/makeRequest";
import {
  getChatsFailure,
  getChatsRequest,
  getChatsSuccess,
} from "../reducers/ChatReducer";

export const getChats = () => async (dispatch) => {
  dispatch(getChatsRequest());
  try {
    const res = await makeRequest.get("/chats/me");
    if (res.status === 200) {
      dispatch(getChatsSuccess(res.data));
    }
  } catch (err) {
    dispatch(getChatsFailure(err.response.data));
    console.log(err);
  }
};
