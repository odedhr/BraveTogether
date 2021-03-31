import { combineReducers } from "redux";
import entities from "./entitiesReducer";
import events from "./eventsReducer";
const rootReducer = combineReducers({
  entities,
  events,
});
export default rootReducer;
