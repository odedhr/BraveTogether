import apiAction from "./apiAction";
import * as types from "./types/actionStringsTypes";
import { getAllHeroes, SelectCategory } from "./types/entitiesActionTypes";
import { getAllEventsAction } from "./types/eventsActionTypes";
import { makeApiUrl } from "./utils";

export const selectCategory = (categories: string[]): SelectCategory => {
  return {
    type: types.SELECT_CATEGORY,
    payload: categories,
  };
};
export const getAllHeroesRequest = () => {
  const url = makeApiUrl("heroes/");

  return apiAction({
    request: {
      url,
    },
    logic: {
      onFailed: (error, dispatch) => {},
      onSuccess: (data, dispatch) => {
        console.log(data);
        dispatch(getAllHeroes.success(data.heroes));
      },
      onStarted: () => {},
    },
  });
};
