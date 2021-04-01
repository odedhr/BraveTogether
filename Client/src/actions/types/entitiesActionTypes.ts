import { createAsyncAction } from "typesafe-actions";
import { SELECT_CATEGORY } from "./actionStringsTypes";

export interface SelectCategory {
  type: typeof SELECT_CATEGORY;
  payload: string[];
}
export const getAllHeroes = createAsyncAction(
  "GET_ALL_HERO_STARTED",
  "GET_ALL_HERO_SUCCESS",
  "GET_ALL_HERO_FAILED"
)<any, any, any>();
export type EntitiesActionTypes = SelectCategory;
