import { User } from "../store/storeTypes";
import { makeApiUrl } from "./utils";
import apiAction from "./apiAction";
import {
  convertAddressToLocationThenCreateEventAC,
  createHeroRequsetAction,
  loginUserAction,
  registerUser,
  tokenRequestAction,
} from "./types/userActionTypes";
import axios, { Method, AxiosRequestConfig, CancelTokenSource, ResponseType } from "axios";
import { Hero, TeacherInput } from "../components/Form/TeacherCardForm";
export type UserPost = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  cellphone: string;
  has_criminal_record: boolean;
  has_committed_to_privacy: boolean;
  has_applied_for_manager: boolean;
};
export const registerUserRequset = (user: UserPost) => {
  const url = makeApiUrl("users/");
  console.log(user);

  return apiAction({
    request: {
      url,
      method: "POST",
      data: user,
    },
    logic: {
      onFailed: (error, dispatch) => console.log(error),
      onSuccess: (data, dispatch) => {
        dispatch(registerUser.success(data));
      },
      onStarted: () => {},
    },
  });
};
export const createHeroRequset = (hero: Hero) => {
  const url = makeApiUrl("heroes/");
  return apiAction({
    request: {
      url,
      method: "POST",
      data: hero,
    },
    logic: {
      onFailed: (error, dispatch) => console.log(error),
      onSuccess: (data, dispatch) => dispatch(createHeroRequsetAction.success(data.user)),
      onStarted: () => {},
    },
  });
};
export const tokenRequest = (username: string, password: string) => {
  const url = "http://localhost:5000/token";
  return apiAction({
    request: {
      url,
      auth: {
        username,
        password,
      },
    },
    logic: {
      onFailed: (error, dispatch) => dispatch(tokenRequestAction.failure(error)),
      onSuccess: (data, dispatch) => {
        loginRequest(username);
        dispatch(tokenRequestAction.success(data));
      },
      onStarted: () => {},
    },
  });
};
export const loginRequest = (username: string) => {
  const url = makeApiUrl("users/by-email/" + username);
  return apiAction({
    request: {
      url,
    },
    logic: {
      onFailed: (error, dispatch) => dispatch(loginUserAction.failure(error)),
      onSuccess: (data, dispatch) => {
        if (!data.error) dispatch(loginUserAction.success(data.user));
      },
      onStarted: () => {},
    },
  });
};
export const translate = (hebrew: string) => {
  const url = makeApiUrl("services/translate");
  return axios.post(url, { text: hebrew });
};
