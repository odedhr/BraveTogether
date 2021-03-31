import { EventsActionTypes } from "../actions/types/eventsActionTypes";
import initialState from "../store/initState";
import { Events } from "../store/storeTypes";
import * as actionStringsTypes from "../actions/types/actionStringsTypes";

export default function EventsReducer(
  state: Events = initialState.events,
  action: EventsActionTypes
): Events {
  switch (action.type) {
    case actionStringsTypes.CREATE_NEW_EVENT:
      return {
        ...state,
        newEvent: { ...state.newEvent, ...action.payload },
      };
    default: {
      return state;
    }
  }
}
