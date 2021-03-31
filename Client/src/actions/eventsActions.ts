import { Event } from "../store/storeTypes";
import * as types from "./types/actionStringsTypes";
import { CreateNewEventAction } from "./types/eventsActionTypes";

export const createNewEvent = (event: Event): CreateNewEventAction => {
  return {
    type: types.CREATE_NEW_EVENT,
    payload: event,
  };
};
