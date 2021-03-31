import { combineReducers } from "redux";
import entities from "./entitiesReducer";
import events from "./eventsReducer";
import user from "./usersReducer";
import hero from "./usersReducer";
const rootReducer = combineReducers({
  entities,
  events,
  user,
  hero,
});
export default rootReducer;
