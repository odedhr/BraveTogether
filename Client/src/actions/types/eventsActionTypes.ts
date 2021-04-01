import { createAsyncAction } from "typesafe-actions";
import { Event } from "../../store/storeTypes";
import { CREATE_NEW_EVENT } from "./actionStringsTypes";

export interface CreateNewEventAction {
  type: typeof CREATE_NEW_EVENT;
  payload: Event;
}

export const getAllEventsAction = createAsyncAction(
  "GET_ALL_EVENTS_STARTED",
  "GET_ALL_EVENTS_SUCCESS",
  "GET_ALL_EVENTS_FAILED"
)<any, any, any>();
export type EventsActionTypes = CreateNewEventAction;
