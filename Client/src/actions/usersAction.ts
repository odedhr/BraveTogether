import { User } from "../store/storeTypes";
import { makeApiUrl } from "./utils";
import apiAction from "./apiAction";
import shortid from "shortid";
import { convertAddressToLocationAC } from "./types/userActionTypes";

export const registerUserRequset = (user: any) => {
  const url = makeApiUrl("users/");
  user.user_id = shortid.generate();
  return apiAction({
    request: {
      url,
      method: "POST",
      params: {
        user,
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
        console.log(data.data[0]);
        dispatch(convertAddressToLocationAC.success(data.data[0]));
      },
      onStarted: () => {},
    },
  });
};
