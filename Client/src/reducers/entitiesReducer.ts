import { EntitiesActionTypes } from "../actions/types/entitiesActionTypes";
import initialState from "../store/initState";
import { Entities } from "../store/storeTypes";
import * as actionStringsTypes from "../actions/types/actionStringsTypes";

export default function entitiesReducer(
  state: Entities = initialState.entities,
  action: EntitiesActionTypes
): Entities {
  switch (action.type) {
    case actionStringsTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default: {
      return state;
    }
  }
}
