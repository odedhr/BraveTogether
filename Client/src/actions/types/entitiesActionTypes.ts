import { SELECT_CATEGORY } from "./actionStringsTypes";

export interface SelectCategory {
  type: typeof SELECT_CATEGORY;
  payload: string[];
}
export type EntitiesActionTypes = SelectCategory;
