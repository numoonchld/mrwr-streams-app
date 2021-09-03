import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (userID) => {
  return {
    type: SIGN_IN,
    payload: userID,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  // console.log(getState())
  const { userID } = getState().auth;
  const { data } = await streams.post("/streams", { ...formValues, userID });
  dispatch({ type: CREATE_STREAM, payload: data });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const { data } = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: data });
};

export const fetchStream = (streamID) => async (dispatch) => {
  const { data } = await streams.get(`/streams/${streamID}`);
  dispatch({ type: FETCH_STREAM, payload: data });
};

export const editStream = (streamID, updatedStream) => async (dispatch) => {
  const { data } = await streams.patch(`/streams/${streamID}`, updatedStream);
  dispatch({ type: EDIT_STREAM, payload: data });
  history.push("/");
};

export const deleteStream = (streamID) => async (dispatch) => {
  streams.delete(`/streams/${streamID}`);
  dispatch({ type: DELETE_STREAM, payload: streamID });
  history.push("/");
};
