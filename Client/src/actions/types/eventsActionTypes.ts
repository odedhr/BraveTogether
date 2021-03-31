import { Event } from "../../store/storeTypes";
import { CREATE_NEW_EVENT } from "./actionStringsTypes";

export interface CreateNewEventAction {
  type: typeof CREATE_NEW_EVENT;
  payload: Event;
}
export type EventsActionTypes = CreateNewEventAction;
