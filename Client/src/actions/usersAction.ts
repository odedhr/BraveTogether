import { User } from "../store/storeTypes";
import { makeApiUrl } from "./utils";
import apiAction from "./apiAction";
import shortid from "shortid";

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
