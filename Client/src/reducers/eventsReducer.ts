import { EventsActionTypes } from "../actions/types/eventsActionTypes";
import initialState from "../store/initState";
import { Events, Store } from "../store/storeTypes";
import * as actionStringsTypes from "../actions/types/actionStringsTypes";
import { createReducer } from "typesafe-actions";
import { convertAddressToLocationAC } from "../actions/types/userActionTypes";

// export default function EventsReducer(
//   state: Events = initialState.events,
//   action: EventsActionTypes
// ): Events {
//   switch (action.type) {
//     case actionStringsTypes.CREATE_NEW_EVENT:
//       return {
//         ...state,
//         newEvent: { ...state.newEvent, ...action.payload },
//       };
//     default: {
//       return state;
//     }
//   }
// }
const reducer = createReducer<Events, any>(initialState.events).handleAction(
  convertAddressToLocationAC.success,
  (state: Events, action: any) => {
    console.log(action);
    return {
      ...state,
      newEvent: { ...state.newEvent, long: action.payload.longitude, lat: action.payload.latitude },
    };
  }
);
export default reducer;
