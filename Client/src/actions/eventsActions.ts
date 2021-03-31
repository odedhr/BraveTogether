import { Event } from "../store/storeTypes";
import apiAction from "./apiAction";
import * as types from "./types/actionStringsTypes";
import { CreateNewEventAction } from "./types/eventsActionTypes";
import {
  convertAddressToLocationThenCreateEventAC,
  createHeroRequsetAction,
} from "./types/userActionTypes";
import { makeApiUrl } from "./utils";

export const createNewEvent = (event: Event): CreateNewEventAction => {
  return {
    type: types.CREATE_NEW_EVENT,
    payload: event,
  };
};
export const convertAddressToLocationThenCreateEvent = (address: string) => {
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
      onFailed: (error, dispatch) =>
        dispatch(convertAddressToLocationThenCreateEventAC.failure(error)),
      onSuccess: (data, dispatch) => {
        dispatch(convertAddressToLocationThenCreateEventAC.success(data.data[0]));
      },
      onStarted: () => {},
    },
  });
};
export const postNewEvent = (eventData: Event) => {
  const url = makeApiUrl("events/");

  return apiAction({
    request: {
      url,
      method: "POST",
      data: {
        eventData,
      },
    },
    logic: {
      onFailed: (error, dispatch) => {},
      onSuccess: (data, dispatch) => {},
      onStarted: () => {},
    },
  });
};
