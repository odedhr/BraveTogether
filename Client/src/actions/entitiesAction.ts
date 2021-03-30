import * as types from "./types/actionStringsTypes";
import { SelectCategory } from "./types/entitiesActionTypes";

export const selectCategory = (categories: string[]): SelectCategory => {
  return {
    type: types.SELECT_CATEGORY,
    payload: categories,
  };
};
