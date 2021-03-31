import initialState from "../store/initState";
import { User } from "../store/storeTypes";

import { registerUser } from "../actions/types/userActionTypes";
export default function usersReducer(state: User = initialState.user, action: any): User {
  switch (action.type) {
    case registerUser.success:
      return action.payload;
    default: {
      return state;
    }
  }
}
