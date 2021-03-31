import { User } from "../store/storeTypes";
import { makeApiUrl } from "./utils";
import apiAction from "./apiAction";
import { convertAddressToLocationAC, registerUser } from "./types/userActionTypes";
export type UserPost = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  cellphone: string;
  is_manager: boolean;
  has_criminal_record: boolean;
  has_committed_to_privacy: boolean;
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
export const loginRequest = (username: string, password: string) => {
  const url = makeApiUrl("http://localhost:5000/token");
  return apiAction({
    request: {
      url,
      headers: {
        auth: {
          username,
          password,
        },
      },
    },
    logic: {
      onFailed: (error, dispatch) => console.log(error),
      onSuccess: (data, dispatch) => console.log(data),
      onStarted: () => {},
    },
  });
};
export const convertAddressToLocation = (address: string) => {
  const url = "http://api.positionstack.com/v1/forward";
  return apiAction({
    request: {
      url,
      params: {
        access_key: "93de448afd13312becfeb7b03e1a9711",
        query: address,
      },
    },
    logic: {
      onFailed: (error, dispatch) => dispatch(convertAddressToLocationAC.failure(error)),
      onSuccess: (data, dispatch) => {
        dispatch(convertAddressToLocationAC.success(data.data[0]));
      },
      onStarted: () => {},
    },
  });
};
