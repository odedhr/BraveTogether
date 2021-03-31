import initialState from "../store/initState";
import { Store, User } from "../store/storeTypes";
import { createReducer } from "typesafe-actions";
import { createHeroRequsetAction } from "../actions/types/userActionTypes";
import { Hero } from "../components/Form/TeacherCardForm";

const reducer = createReducer<Hero, any>(initialState.hero).handleAction(
  createHeroRequsetAction.success,
  (state: Store, action: any) => {
    const { payload } = action;
    console.log(payload);
    return { ...state, ...payload };
  }
);
export default reducer;
