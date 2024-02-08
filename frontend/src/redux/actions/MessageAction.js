import { makeRequest } from "../../utils/makeRequest";
import { getCurrentChat } from "../reducers/ChatReducer";
import {
  createMessageFailure,
  createMessageRequest,
  createMessageSuccess,
  getMessagesFailure,
  getMessagesRequest,
  getMessagesSuccess,
} from "../reducers/MessageReducer";
import { getChats } from "./ChatActions";

export const getMessages = (id) => async (dispatch) => {
  dispatch(getMessagesRequest());
  try {
    const res = await makeRequest.get(`/messages/find/${id}`);
    if (res.status === 200) {
      dispatch(getMessagesSuccess(res.data));
    }
  } catch (err) {
    dispatch(getMessagesFailure(err.response.data));
    console.log(err);
  }
};

export const createMessage = (data) => async (dispatch) => {
  dispatch(createMessageRequest());
  try {
    const res = await makeRequest.post("/messages", data);
    if (res.status === 200) {
      dispatch(createMessageSuccess(res.data));
      dispatch(getChats());
    }
  } catch (err) {
    err.response && dispatch(createMessageFailure(err.response.data));
    console.log(err);
  }
};
