import { Event, User } from "../store/storeTypes";
import { createAsyncAction } from "typesafe-actions";
import { makeApiUrl } from "./utils";
import apiAction from "./apiAction";
import { registerUser } from "./types/userActionTypes";

export const registerUserRequset = (user: User) => {
  const url = makeApiUrl("users/");
  return apiAction({
    request: {
      url,
      params: {
        user,
      },
    },
    logic: {
      onFailed: (error, dispatch) => dispatch(registerUser.failure(error)),
      onSuccess: (data, dispatch) => {
        dispatch(registerUser.success(data));
      },
      onStarted: () => {},
    },
  });
};
